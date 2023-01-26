package ru.kata.spring.boot_security.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.kata.spring.boot_security.demo.repositories.RoleRepository;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping(value = "/user")
public class UserController {


    public UserController() {

    }

    @GetMapping(value = "/getUserInfo")
    public String getUserInfo(){
        return "UserView";
    }

    @GetMapping(value = "/getEmptyUser")
    public String getEmptyPage(){
        return "EmptyUser";
    }
}
