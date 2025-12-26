package com.example.demo.DAO;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.Product_details;


@RepositoryRestResource(path="product_details")
@CrossOrigin("http://localhost:4200")
public interface Product_details_Jpa extends JpaRepository<Product_details, Integer> {

	Page<Product_details> findBypcid(@RequestParam("pc_id") Integer id,Pageable pageable);
 public List<Product_details> findBypname(String pname);
}
