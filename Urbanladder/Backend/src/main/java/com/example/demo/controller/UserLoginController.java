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
public ResponseEntity<String> login(
        @RequestParam String email,
        @RequestParam String password,
        @RequestParam String usertype) {

    usertype = usertype.toLowerCase(); // 🔥 FIX

    User_details user =
        repo.findByEmailAndPasswordAndUsertype(
            email, password, usertype
        );

    if (user == null) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Invalid credentials");
    }

    return ResponseEntity.ok("Login successful");
}



}
