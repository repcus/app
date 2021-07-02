package com.carrental.app.services;

import com.carrental.app.entity.Users;
import com.carrental.app.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;

@Service
@RequiredArgsConstructor
@CrossOrigin(origins="http://localhost:3000")

public class UsersServiceImpl implements UsersService{
    private final UsersRepository usersRepository;
    public Users findBySurrname(String username){
        return usersRepository.findByUsername(username);
    }

    @Override
    public Users findByEmail(String email) {
        return usersRepository.findByEmail(email);
    }

    @Override
    public Users findById(Integer id) { return usersRepository.findById(id); }

    @Override
    public List<Users> findAll(){
        return usersRepository.findAll();
    }

    @Override
    public Users save(Users user) { return usersRepository.save(user); }

    @Override
    public Users deleteById(Integer id) { return usersRepository.deleteById(id); }
}
