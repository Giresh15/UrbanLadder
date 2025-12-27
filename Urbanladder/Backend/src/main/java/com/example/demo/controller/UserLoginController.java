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
        @RequestParam(required = false) String email,
        @RequestParam(required = false) String password,
        @RequestParam(required = false) String usertype) {

    // ✅ 1. Validate input
    if (email == null || email.isEmpty()
            || password == null || password.isEmpty()
            || usertype == null || usertype.isEmpty()) {

        return ResponseEntity.badRequest()
                .body("Please enter email, password and user type");
    }

    // ✅ 2. Check DB
    User_details user =
        userRepo.findByEmailAndPasswordAndUsertype(
            email, password, usertype
        );

    // ✅ 3. Invalid credentials
    if (user == null) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Invalid email or password");
    }

    // ✅ 4. Success
    return ResponseEntity.ok("Login successful");
}


}
