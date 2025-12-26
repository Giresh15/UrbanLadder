package com.example.demo.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Product_category;


@RepositoryRestResource(path="product_category")
@CrossOrigin(origins = "*")
public interface Product_category_Jpa extends JpaRepository<Product_category, Integer> {

}
