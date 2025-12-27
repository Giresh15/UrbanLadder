package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.example.demo.DAO.User_details_Jpa;
import com.example.demo.entity.User_details;


@RestController
@RequestMapping("/urbanladder")
@CrossOrigin(origins = "*")
public class UserLoginController {
    
    
    private final User_details_Jpa repo;

    public UserLoginController(User_details_Jpa repo) {
        this.repo = repo;
    }

@PostMapping("/login")
public ResponseEntity<String> login(@RequestBody User_details user) {

    User_details dbUser =
        repo.findByEmailAndPasswordAndUsertype(
            user.getEmail(),
            user.getPassword(),
            user.getUsertype().toLowerCase()
        );

    if (dbUser == null) {
        return ResponseEntity.status(401).body("Invalid credentials");
    }

    return ResponseEntity.ok("Login successful");
}

}
