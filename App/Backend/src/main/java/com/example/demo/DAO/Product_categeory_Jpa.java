package com.example.demo.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Product_categeory;


@RepositoryRestResource(path="product_categeory")
@CrossOrigin("http://localhost:4200")
public interface Product_categeory_Jpa extends JpaRepository<Product_categeory, Integer> {

}
