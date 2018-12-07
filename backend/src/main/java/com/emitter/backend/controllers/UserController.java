package com.emitter.backend.controllers;


import com.emitter.backend.entity.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {


    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public User user() {
        return new User();
    }
}