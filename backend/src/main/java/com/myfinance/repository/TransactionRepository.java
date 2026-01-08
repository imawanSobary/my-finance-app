package com.myfinance.repository;

import com.myfinance.model.Transaction;
import com.myfinance.model.Transaction.TransactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    
    List<Transaction> findByUserIdOrderByTransactionDateDesc(Long userId);
    
    List<Transaction> findTop10ByUserIdOrderByTransactionDateDesc(Long userId);
    
    List<Transaction> findByUserIdAndType(Long userId, TransactionType type);
    
    @Query("SELECT SUM(t.amount) FROM Transaction t WHERE t.user.id = :userId AND t.type = :type")
    BigDecimal sumAmountByUserIdAndType(@Param("userId") Long userId, @Param("type") TransactionType type);
    
    @Query("SELECT t.category, SUM(t.amount) FROM Transaction t WHERE t.user.id = :userId AND t.type = :type GROUP BY t.category")
    List<Object[]> sumAmountByCategory(@Param("userId") Long userId, @Param("type") TransactionType type);
    
    @Query("SELECT FUNCTION('strftime', '%Y-%m', t.transactionDate), t.type, SUM(t.amount) " +
           "FROM Transaction t WHERE t.user.id = :userId " +
           "GROUP BY FUNCTION('strftime', '%Y-%m', t.transactionDate), t.type " +
           "ORDER BY FUNCTION('strftime', '%Y-%m', t.transactionDate)")
    List<Object[]> getMonthlyCashflow(@Param("userId") Long userId);
    
    List<Transaction> findByUserIdAndTransactionDateBetween(Long userId, LocalDate startDate, LocalDate endDate);
}
