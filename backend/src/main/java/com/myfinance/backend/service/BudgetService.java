package com.myfinance.backend.service;

import com.myfinance.backend.model.Budget;
import com.myfinance.backend.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BudgetService {
    @Autowired
    private BudgetRepository budgetRepository;

    public List<Budget> getAllBudgets() {
        return budgetRepository.findAll();
    }

    public Budget createBudget(Budget budget) {
        return budgetRepository.save(budget);
    }
}
