package com.example.TimeKeepers.ServiceInt;

import java.util.List;

import com.example.TimeKeepers.Model.ProductModel;

public interface ProductService{

	public abstract List<ProductModel> getProducts();

	public abstract ProductModel createProduct(ProductModel productModel);

	public abstract void updateProduct(ProductModel productModel);

	public abstract void deleteProduct(Integer productId);

	public abstract boolean isProductExist(String productName);

	public abstract boolean isProductExistbyid(int productId);

    public abstract ProductModel getProductbyid(int productId);

    public abstract List<ProductModel> getProductbyname(String productName);
	
}