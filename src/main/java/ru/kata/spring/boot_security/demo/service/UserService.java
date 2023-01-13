package ru.kata.spring.boot_security.demo.service;


import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.model.User;

import java.util.List;

public interface UserService extends UserDetailsService {
    List<User> getListUser();
    void saveNewUser(User user);
    void updateUser(User user);
    User getUser(Long id);
    void deleteUser(Long id);
    User getUser(String username);

}
