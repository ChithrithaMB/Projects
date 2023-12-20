package com.example.TimeKeepers.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="watch12")
public class ProductModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	private String productName;
	private String productUrl;
	private float productRate;
	private String productQuantity;
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}


	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductUrl() {
		return productUrl;
	}

	public void setProductUrl(String productUrl) {
		this.productUrl = productUrl;
	}


	public float getProductRate() {
		return productRate;
	}


	public void setProductRate(float productRate) {
		this.productRate = productRate;
	}

	public String getProductQuantity() {
		return productQuantity;
	}
	public void setProductQuantity(String productQuantity) {
		this.productQuantity = productQuantity;
	}
	
	public ProductModel(int productId, String productName, String productUrl, float productRate,
			String productQuantity) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productUrl = productUrl;
		this.productRate = productRate;
		this.productQuantity = productQuantity;
	}
	public ProductModel()
	{
		
	}
}