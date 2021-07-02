package com.carrental.app.services;

import java.util.List;
import com.carrental.app.entity.Users;

public interface UsersService {
    Users findByEmail(String email);
    Users findById(Integer id);
    Users save(Users user);
    Users deleteById(Integer id);
    List<Users> findAll();
}
