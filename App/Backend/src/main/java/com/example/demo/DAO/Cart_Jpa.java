package com.example.demo.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Cart;


@RepositoryRestResource(path="cart")
@CrossOrigin(origins = "*")
public interface Cart_Jpa extends JpaRepository<Cart, Integer> {

}
