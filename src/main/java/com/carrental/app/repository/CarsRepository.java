package com.carrental.app.repository;

import com.carrental.app.entity.Cars;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface CarsRepository extends JpaRepository<Cars, Integer> {
    Cars findByModel(@Param("model")String model);
}
