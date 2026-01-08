package com.myfinance.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private Long id;
    private String name;
    private String email;
    private String message;
    private boolean success;
    
    public static AuthResponse success(Long id, String name, String email, String message) {
        return new AuthResponse(id, name, email, message, true);
    }
    
    public static AuthResponse error(String message) {
        return new AuthResponse(null, null, null, message, false);
    }
}
