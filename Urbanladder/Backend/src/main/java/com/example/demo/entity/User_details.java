package com.example.demo.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="user_details")
public class User_details {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="fname")
	private String fname;
	
	@Column(name="lname")
	private String lname;
	
	@Column(name="email")
	private String email;
	
	@Column(name="phonenumber")
	private long phonenumber;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;
	
	@Column(name="usertype")
	private String usertype;
	
	//lets see
	@OneToMany(mappedBy="user_details")
	private Set<Cart> carts;
	
	
	public User_details() {}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(long phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsertype() {
		return usertype;
	}

	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}

	public User_details(int id, String fname, String lname, String email, long phonenumber, String username,
			String password, String usertype) {
		
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.phonenumber = phonenumber;
		this.username = username;
		this.password = password;
		this.usertype = usertype;
	}

	@Override
	public String toString() {
		return "User_details [id=" + id + ", fname=" + fname + ", lname=" + lname + ", email=" + email
				+ ", phonenumber=" + phonenumber + ", username=" + username + ", password=" + password + ", usertype="
				+ usertype + ", carts=" + carts + "]";
	}
	
}
