package ru.kata.spring.boot_security.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;


@RestController
@RequestMapping("/api")
public class RestAdminController {

    private final UserService userService;
    RestAdminController(UserService userService){
        this.userService = userService;
    }

    @GetMapping(value = "/users")
    public ResponseEntity<?> printAllUsers(){
        return new ResponseEntity<>(userService.getListUser(), HttpStatus.OK);
    }

    @GetMapping(value = "/users/{id}")
    public ResponseEntity<?> getUserById(@PathVariable("id") Long id){
        return new ResponseEntity<>(userService.getUser(id), HttpStatus.OK);
    }

    @GetMapping(value = "/currentUser")
    public ResponseEntity<?> getCurrentUser(Principal principal){
        return new ResponseEntity<>(userService.getUser(principal.getName()), HttpStatus.OK);
    }

    @PostMapping(value = "/users")
    public ResponseEntity<?> addUser(@RequestBody User user){
        userService.saveNewUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping(value = "/users")
    public ResponseEntity<?> updateUser(@RequestBody User user){
        userService.updateUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id){
        userService.deleteUser(id);
        return new ResponseEntity<>("User with id = " + id + " was deleted", HttpStatus.OK);
    }

    @GetMapping(value = "/roles")
    public ResponseEntity<?> getAllRoles(){
        return new ResponseEntity<>(userService.getListRoles(), HttpStatus.OK);
    }

//    @GetMapping(value = "/users/{id}")
//    User getUserById(@PathVariable("id") Long id){
//        return userService.getUser(id);
//    }
//
//    @PostMapping(value = "/users")
//    User addUser(@RequestBody User user){
//        userService.saveNewUser(user);
//        return user;
//    }
//
//    @PutMapping(value = "/users")
//    User updateUser(@RequestBody User user){
//        userService.updateUser(user);
//        return user;
//    }
//
//    @DeleteMapping(value = "/users/{id}")
//    String deleteUser(@PathVariable("id") Long id){
//        userService.deleteUser(id);
//        return "User with id = " + id + " was deleted";
//    }

}
