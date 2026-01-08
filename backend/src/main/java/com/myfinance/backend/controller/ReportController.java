package com.myfinance.backend.controller;

import com.myfinance.backend.model.Account;
import com.myfinance.backend.model.Budget;
import com.myfinance.backend.model.Transaction;
import com.myfinance.backend.service.AccountService;
import com.myfinance.backend.service.BudgetService;
import com.myfinance.backend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:5173")
public class ReportController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private BudgetService budgetService;

    @GetMapping("/summary")
    public Map<String, Object> getDashboardSummary() {
        Map<String, Object> response = new HashMap<>();

        // 1. Total Balance
        List<Account> accounts = accountService.getAllAccounts();
        double totalBalance = accounts.stream()
                .mapToDouble(Account::getBalance)
                .sum();
        response.put("totalBalance", totalBalance);

        // 2. Recent Transactions (Limit 5)
        List<Transaction> transactions = transactionService.getAllTransactions();
        response.put("recentTransactions", transactions.stream().limit(5).collect(Collectors.toList()));

        // 3. Spending by Category (for Budget comparison)
        Map<String, Double> expensesByCategory = transactions.stream()
                .filter(t -> "expense".equalsIgnoreCase(t.getType()) || "transfer".equalsIgnoreCase(t.getType())) // Assuming
                                                                                                                  // transfers
                                                                                                                  // might
                                                                                                                  // count
                .collect(Collectors.groupingBy(
                        Transaction::getCategory,
                        Collectors.summingDouble(Transaction::getAmount)));
        response.put("expensesByCategory", expensesByCategory);

        // 4. Total Expenses
        double totalExpenses = expensesByCategory.values().stream().mapToDouble(Double::doubleValue).sum();
        response.put("totalExpenses", totalExpenses);

        return response;
    }
}
