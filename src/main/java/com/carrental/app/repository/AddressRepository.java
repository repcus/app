package com.carrental.app.repository;

import com.carrental.app.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface AddressRepository extends JpaRepository<Address, String>{
    Address findByCity(@Param("city")String city);
}


