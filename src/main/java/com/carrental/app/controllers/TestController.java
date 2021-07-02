package com.carrental.app.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @RequestMapping("/test")
    public String Test(){
        return "elo";
    }
    @RequestMapping("/authTest")
    public String AuthTest(){
        return "auth";
    }
}
