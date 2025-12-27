package com.example.demo.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;


import javax.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {
    
	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="descriprtion")
	private String descriprtion;
	
	@Column(name="price")
	private int price;
	
	@Column(name="image_url")
	private String image_url;
	
	//lets see
	@Column(name="user_id")
	private int user_id;
	
	@ManyToOne(targetEntity=
			User_details.class,fetch=FetchType.EAGER)
		     @JoinColumn(name="user_id",insertable=false,updatable=false)
	private User_details user_details;
	
	public Cart() {}
	
	public Cart(int id, String name, String descriprtion, int price, String image_url, int user_id) {
		super();
		this.id = id;
		this.name = name;
		this.descriprtion = descriprtion;
		this.price = price;
		this.image_url = image_url;
		this.user_id = user_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescriprtion() {
		return descriprtion;
	}

	public void setDescriprtion(String descriprtion) {
		this.descriprtion = descriprtion;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getImage_url() {
		return image_url;
	}

	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", name=" + name + ", descriprtion=" + descriprtion + ", price=" + price
				+ ", image_url=" + image_url + ", user_id=" + user_id + ", user_details=" + user_details + "]";
	}
	
}
