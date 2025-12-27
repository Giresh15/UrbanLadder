package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="product_details")
public class Product_details {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="p_id")
	private int p_id;
	
	@Column(name="p_name")
	private String pname;
	
	@Column(name="description")
	private String description;
	
	@Column(name="price")
	private double price;
	
	@Column(name="units_in_stock")
	private int units_in_stock;
	
	@Column(name="image_url")
	private String image_url;
	
	@Column(name="pc_id")
	private int pcid;
	
	@ManyToOne(targetEntity=
			Product_category.class,fetch=FetchType.EAGER)
		     @JoinColumn(name="pc_id",insertable=false,updatable=false)
	private Product_category product_category;
	
	public Product_details() {}
	
	public Product_details(int p_id, String pname, String description, double price, int units_in_stock,
			String image_url, int pcid) {
		super();
		this.p_id = p_id;
		this.pname = pname;
		this.description = description;
		this.price = price;
		this.units_in_stock = units_in_stock;
		this.image_url = image_url;
		this.pcid = pcid;
	}


	public int getP_id() {
		return p_id;
	}


	public void setP_id(int p_id) {
		this.p_id = p_id;
	}


	public String getPname() {
		return pname;
	}


	public void setPname(String pname) {
		this.pname = pname;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public int getUnits_in_stock() {
		return units_in_stock;
	}


	public void setUnits_in_stock(int units_in_stock) {
		this.units_in_stock = units_in_stock;
	}


	public String getImage_url() {
		return image_url;
	}


	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}


	public int getPcid() {
		return pcid;
	}


	public void setPcid(int pcid) {
		this.pcid = pcid;
	}


	@Override
	public String toString() {
		return "Product_details [p_id=" + p_id + ", p_name=" + pname + ", description=" + description + ", price="
				+ price + ", units_in_stock=" + units_in_stock + ", image_url=" + image_url + ", pc_id=" + pcid + "]";
	}
	
	
}
