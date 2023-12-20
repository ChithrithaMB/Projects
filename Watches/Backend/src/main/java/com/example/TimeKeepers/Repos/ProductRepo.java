package com.example.TimeKeepers.Repos;

import org.springframework.data.repository.CrudRepository;

import com.example.TimeKeepers.Model.ProductModel;

import java.util.List;

public interface ProductRepo extends CrudRepository<ProductModel, Integer>
{

	boolean existsByProductNameIgnoreCase(String productName);

    List<ProductModel> findByProductNameContainingIgnoreCase(String productName);
}