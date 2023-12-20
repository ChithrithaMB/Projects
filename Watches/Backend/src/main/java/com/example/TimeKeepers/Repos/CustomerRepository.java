package com.example.TimeKeepers.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.TimeKeepers.Model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{
	
}
