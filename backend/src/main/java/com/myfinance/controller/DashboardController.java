package com.myfinance.controller;

import com.myfinance.dto.DashboardResponse;
import com.myfinance.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {
    
    private final DashboardService dashboardService;
    
    @GetMapping("/summary")
    public ResponseEntity<DashboardResponse> getDashboardSummary(
            @RequestParam(required = false) Long userId) {
        // Use dummy data for now (until user authentication is implemented)
        DashboardResponse response = dashboardService.getDummyDashboardData();
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/summary/{userId}")
    public ResponseEntity<DashboardResponse> getDashboardSummaryByUser(@PathVariable Long userId) {
        DashboardResponse response = dashboardService.getDashboardData(userId);
        return ResponseEntity.ok(response);
    }
}
