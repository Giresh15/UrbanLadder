package com.example.demo.controller;

import com.example.demo.DAO.User_details_Jpa;
import com.example.demo.entity.User_details;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/urbanladder")
@CrossOrigin(origins = "*")
public class UserLoginController {
    
    @Autowired
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
        userRepo.findByEmailAndPasswordAndUsertype(
            email, password, usertype
        );

    if (user == null) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Invalid credentials");
    }

    return ResponseEntity.ok("Login successful");
}



}
