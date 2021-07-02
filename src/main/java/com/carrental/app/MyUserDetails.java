package com.carrental.app;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

public class MyUserDetails implements UserDetails {

    private String username;
    private String password;
    private String userrole;

    public MyUserDetails(String username, String password, Integer userrole) {
        this.username = username;
        this.password = password;
        if(userrole == 1){
            this.userrole = "ROLE_ADMIN";
        }else{
            this.userrole = "ROLE_USER";
        }

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities(){
        return Collections.singletonList(new SimpleGrantedAuthority(this.userrole));
    }

    @Override
    public String getPassword(){
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
