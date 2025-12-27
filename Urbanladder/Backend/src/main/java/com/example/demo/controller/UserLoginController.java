package com.example.demo.controller;

import com.example.demo.DAO.User_details_Jpa;
import com.example.demo.entity.User_details;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/urbanladder")
@CrossOrigin(origins = "*")
public class UserLoginController {

    private final User_details_Jpa repo;

    public UserLoginController(User_details_Jpa repo) {
        this.repo = repo;
    }

@PostMapping("/login")
public User_details login(@RequestBody User_details user) {

    User_details dbUser = repo.findByEmailAndPasswordAndUsertype(
            user.getEmail(),
            user.getPassword(),
            user.getUsertype().toLowerCase()
    );

    if (dbUser == null) {
        throw new RuntimeException("Invalid email/password/usertype");
    }

    return dbUser;
}
}
