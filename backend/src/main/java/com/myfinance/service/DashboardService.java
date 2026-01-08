package com.myfinance.service;

import com.myfinance.dto.DashboardResponse;
import com.myfinance.dto.DashboardResponse.MonthlyCashflow;
import com.myfinance.dto.DashboardResponse.TransactionDto;
import com.myfinance.model.Transaction;
import com.myfinance.model.Transaction.TransactionType;
import com.myfinance.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DashboardService {
    
    private final TransactionRepository transactionRepository;
    
    public DashboardResponse getDashboardData(Long userId) {
        // Get totals
        BigDecimal totalIncome = transactionRepository.sumAmountByUserIdAndType(userId, TransactionType.INCOME);
        BigDecimal totalExpenses = transactionRepository.sumAmountByUserIdAndType(userId, TransactionType.EXPENSE);
        
        if (totalIncome == null) totalIncome = BigDecimal.ZERO;
        if (totalExpenses == null) totalExpenses = BigDecimal.ZERO;
        
        BigDecimal totalBalance = totalIncome.subtract(totalExpenses);
        BigDecimal totalSavings = totalBalance.multiply(new BigDecimal("0.3")); // Assume 30% savings
        
        // Get expenses by category
        List<Object[]> categoryData = transactionRepository.sumAmountByCategory(userId, TransactionType.EXPENSE);
        Map<String, BigDecimal> expensesByCategory = categoryData.stream()
            .collect(Collectors.toMap(
                row -> (String) row[0],
                row -> (BigDecimal) row[1]
            ));
        
        // Get monthly cashflow
        List<Object[]> cashflowRaw = transactionRepository.getMonthlyCashflow(userId);
        Map<String, MonthlyCashflow> cashflowMap = new LinkedHashMap<>();
        
        for (Object[] row : cashflowRaw) {
            String month = (String) row[0];
            TransactionType type = (TransactionType) row[1];
            BigDecimal amount = (BigDecimal) row[2];
            
            MonthlyCashflow cf = cashflowMap.computeIfAbsent(month, 
                m -> new MonthlyCashflow(m, BigDecimal.ZERO, BigDecimal.ZERO));
            
            if (type == TransactionType.INCOME) {
                cf.setIncome(amount);
            } else {
                cf.setExpense(amount);
            }
        }
        
        List<MonthlyCashflow> cashflowData = new ArrayList<>(cashflowMap.values());
        
        // Get recent transactions
        List<Transaction> recentTx = transactionRepository.findTop10ByUserIdOrderByTransactionDateDesc(userId);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM dd, yyyy");
        
        List<TransactionDto> recentTransactions = recentTx.stream()
            .map(tx -> new TransactionDto(
                tx.getId(),
                tx.getName(),
                tx.getCategory(),
                tx.getAmount(),
                tx.getType().name().toLowerCase(),
                tx.getTransactionDate().format(formatter),
                tx.getIcon()
            ))
            .collect(Collectors.toList());
        
        return new DashboardResponse(
            totalBalance,
            totalIncome,
            totalExpenses,
            totalSavings,
            cashflowData,
            expensesByCategory,
            recentTransactions
        );
    }
    
    // Generate dummy data for testing
    public DashboardResponse getDummyDashboardData() {
        DashboardResponse response = new DashboardResponse();
        
        response.setTotalBalance(new BigDecimal("45750000"));
        response.setTotalIncome(new BigDecimal("28500000"));
        response.setTotalExpenses(new BigDecimal("15200000"));
        response.setTotalSavings(new BigDecimal("13300000"));
        
        // Monthly cashflow data
        List<MonthlyCashflow> cashflowData = Arrays.asList(
            new MonthlyCashflow("Jan", new BigDecimal("25000000"), new BigDecimal("18000000")),
            new MonthlyCashflow("Feb", new BigDecimal("28000000"), new BigDecimal("20000000")),
            new MonthlyCashflow("Mar", new BigDecimal("26500000"), new BigDecimal("19500000")),
            new MonthlyCashflow("Apr", new BigDecimal("29000000"), new BigDecimal("21000000")),
            new MonthlyCashflow("May", new BigDecimal("31000000"), new BigDecimal("22000000")),
            new MonthlyCashflow("Jun", new BigDecimal("28500000"), new BigDecimal("19000000")),
            new MonthlyCashflow("Jul", new BigDecimal("32000000"), new BigDecimal("23000000")),
            new MonthlyCashflow("Aug", new BigDecimal("30000000"), new BigDecimal("21000000")),
            new MonthlyCashflow("Sep", new BigDecimal("28500000"), new BigDecimal("18500000")),
            new MonthlyCashflow("Oct", new BigDecimal("33000000"), new BigDecimal("24000000")),
            new MonthlyCashflow("Nov", new BigDecimal("35000000"), new BigDecimal("22000000")),
            new MonthlyCashflow("Dec", new BigDecimal("28500000"), new BigDecimal("15200000"))
        );
        response.setCashflowData(cashflowData);
        
        // Expenses by category
        Map<String, BigDecimal> expensesByCategory = new LinkedHashMap<>();
        expensesByCategory.put("Food & Dining", new BigDecimal("4500000"));
        expensesByCategory.put("Transportation", new BigDecimal("2800000"));
        expensesByCategory.put("Shopping", new BigDecimal("3200000"));
        expensesByCategory.put("Bills & Utilities", new BigDecimal("2500000"));
        expensesByCategory.put("Entertainment", new BigDecimal("1500000"));
        expensesByCategory.put("Others", new BigDecimal("700000"));
        response.setExpensesByCategory(expensesByCategory);
        
        // Recent transactions
        List<TransactionDto> recentTransactions = Arrays.asList(
            new TransactionDto(1L, "Salary Deposit", "Income", new BigDecimal("15000000"), "income", "Dec 01, 2025", "💼"),
            new TransactionDto(2L, "Grocery Shopping", "Food & Dining", new BigDecimal("850000"), "expense", "Dec 02, 2025", "🛒"),
            new TransactionDto(3L, "Electric Bill", "Bills & Utilities", new BigDecimal("450000"), "expense", "Dec 03, 2025", "⚡"),
            new TransactionDto(4L, "Freelance Project", "Income", new BigDecimal("5000000"), "income", "Dec 04, 2025", "💻"),
            new TransactionDto(5L, "Restaurant Dinner", "Food & Dining", new BigDecimal("350000"), "expense", "Dec 05, 2025", "🍽️"),
            new TransactionDto(6L, "Online Shopping", "Shopping", new BigDecimal("1200000"), "expense", "Dec 06, 2025", "📦")
        );
        response.setRecentTransactions(recentTransactions);
        
        return response;
    }
}
