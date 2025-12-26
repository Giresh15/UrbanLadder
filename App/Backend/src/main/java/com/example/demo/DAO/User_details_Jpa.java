package com.example.demo.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.User_details;


@RepositoryRestResource(path="user_details")
@CrossOrigin("http://localhost:4200")
public interface User_details_Jpa extends JpaRepository<User_details, Integer> {

}
