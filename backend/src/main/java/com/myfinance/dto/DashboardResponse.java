package com.myfinance.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardResponse {
    private BigDecimal totalBalance;
    private BigDecimal totalIncome;
    private BigDecimal totalExpenses;
    private BigDecimal totalSavings;
    private List<MonthlyCashflow> cashflowData;
    private Map<String, BigDecimal> expensesByCategory;
    private List<TransactionDto> recentTransactions;
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MonthlyCashflow {
        private String month;
        private BigDecimal income;
        private BigDecimal expense;
    }
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class TransactionDto {
        private Long id;
        private String name;
        private String category;
        private BigDecimal amount;
        private String type;
        private String date;
        private String icon;
    }
}
