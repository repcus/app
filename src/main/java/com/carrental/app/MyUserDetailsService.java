package com.carrental.app;

import com.carrental.app.entity.Users;
import com.carrental.app.services.UsersService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {
    UsersService usersService;

    public MyUserDetailsService(UsersService usersService) {
        this.usersService = usersService;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users user = usersService.findByEmail(email);
        return new MyUserDetails(user.getEmail(), user.getPass(), user.getUserrole()) {
        };
    }
}
