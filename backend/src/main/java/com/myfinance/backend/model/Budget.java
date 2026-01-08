package com.myfinance.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "budgets")
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;

    private Double spent;

    private Double totalLimit; // Avoiding 'limit' keyword

    private String icon;
    
    private String backendKey; // To match dashboard summary keys
}
