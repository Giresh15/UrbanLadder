package com.example.demo.DAO;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Product_details;

@RepositoryRestResource(path = "product_details")
@CrossOrigin(origins = "*")
public interface Product_details_Jpa extends JpaRepository<Product_details, Integer> {

    // ✅ Category based products (pagination)
    Page<Product_details> findByPcid(Integer pcId, Pageable pageable);

    // ✅ SEARCH (this fixes your search button)
    List<Product_details> findByPnameContainingIgnoreCase(String pName);
}

