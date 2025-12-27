package com.example.demo.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="product_category")
public class Product_category {

	@Id
	@Column(name="pc_id")
	private int pc_id;
	
	@Column(name="pc_name")
	private String pc_name;

	
	@OneToMany(mappedBy="product_category")
	private Set<Product_details> productdetails;

	public Product_category() {}
	
	public Product_category(int pc_id, String pc_name) {
		super();
		this.pc_id = pc_id;
		this.pc_name = pc_name;
	}
	
	public int getPc_id() {
		return pc_id;
	}

	public void setPc_id(int pc_id) {
		this.pc_id = pc_id;
	}

	public String getPc_name() {
		return pc_name;
	}

	public void setPc_name(String pc_name) {
		this.pc_name = pc_name;
	}

	@Override
	public String toString() {
		return "Product_category [pc_id=" + pc_id + ", pc_name=" + pc_name + ", productdetails=" + productdetails
				+ "]";
	}	
	
}
