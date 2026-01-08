package com.myfinance.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    // Bank, E-Wallet, Investment, Cash
    private String type;
    
    private String bankName;
    
    private String accountNumber;
    
    private Double balance;
    
    // Hex Color code for UI
    private String color;
    
    private String icon;
}
