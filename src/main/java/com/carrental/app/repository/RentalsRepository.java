package com.carrental.app.repository;


import com.carrental.app.entity.Rentals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface RentalsRepository extends JpaRepository<Rentals, Integer> {
    Optional<Rentals> findById(@Param("id") Integer id);
}
