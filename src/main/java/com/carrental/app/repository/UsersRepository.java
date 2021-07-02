package com.carrental.app.repository;

import com.carrental.app.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsersRepository extends JpaRepository<Users, String>{
    Users findByUsername(@Param("username")String username);
    Users findByEmail(@Param("email")String email);
    Users findById(@Param("id")Integer id);
    Users deleteById(@Param("id")Integer id);
    Users save(@Param("user")Users user);
}