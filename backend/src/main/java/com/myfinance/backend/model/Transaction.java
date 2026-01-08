package com.myfinance.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private Double amount;

    // income, expense, transfer
    private String type;

    private LocalDate date;

    private String category;

    // References Account ID but kept simple for now
    private String accountName;
    
    private String icon;
}
