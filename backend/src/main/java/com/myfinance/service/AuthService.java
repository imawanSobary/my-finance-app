package com.myfinance.service;

import com.myfinance.dto.AuthResponse;
import com.myfinance.dto.LoginRequest;
import com.myfinance.dto.RegisterRequest;
import com.myfinance.model.User;
import com.myfinance.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    
    private final UserRepository userRepository;
    
    public AuthResponse register(RegisterRequest request) {
        // Check if email already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            return AuthResponse.error("Email already registered");
        }
        
        // Create new user (Note: In production, password should be hashed)
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // TODO: Hash password in production
        
        User savedUser = userRepository.save(user);
        
        return AuthResponse.success(
            savedUser.getId(),
            savedUser.getName(),
            savedUser.getEmail(),
            "Registration successful"
        );
    }
    
    public AuthResponse login(LoginRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());
        
        if (userOpt.isEmpty()) {
            return AuthResponse.error("Invalid email or password");
        }
        
        User user = userOpt.get();
        
        // Simple password check (In production, use BCrypt)
        if (!user.getPassword().equals(request.getPassword())) {
            return AuthResponse.error("Invalid email or password");
        }
        
        return AuthResponse.success(
            user.getId(),
            user.getName(),
            user.getEmail(),
            "Login successful"
        );
    }
}
