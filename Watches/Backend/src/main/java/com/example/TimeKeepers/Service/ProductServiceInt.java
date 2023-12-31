package com.example.TimeKeepers.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.TimeKeepers.Model.ProductModel;
import com.example.TimeKeepers.Repos.ProductRepo;
import com.example.TimeKeepers.ServiceInt.ProductService;

@Service
public class ProductServiceInt implements ProductService{
	
	@Autowired
	private ProductRepo productRepo;

	@Override
	public List<ProductModel> getProducts() {
		return (List<ProductModel>)productRepo.findAll();
	}

	@Override
	public ProductModel createProduct(ProductModel productModel) {
		return productRepo.save(productModel);
	}

	@Override
	public void deleteProduct(Integer productId) {
		productRepo.deleteById(productId);
	}

	@Override
	public void updateProduct(ProductModel productModel) {
		productRepo.save(productModel);
	}

	@Override
	public boolean isProductExist(String productName) {
		return productRepo.existsByProductNameIgnoreCase(productName);
	}

	@Override
	public boolean isProductExistbyid(int productId) {
		return productRepo.existsById(productId);
	}

	@Override
	public ProductModel getProductbyid(int productId) {
		Optional<ProductModel> optional = productRepo.findById(productId);
		ProductModel productModel = optional.get();
		return productModel;
	}
	
	@Override
	public List<ProductModel> getProductbyname(String productName) 
	{
		return (List<ProductModel>) productRepo.findByProductNameContainingIgnoreCase(productName);
	}
	
}