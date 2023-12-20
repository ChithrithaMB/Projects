package com.example.TimeKeepers.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TimeKeepers.Model.Customer;
import com.example.TimeKeepers.Repos.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository CusRep;
	
	public Customer createCus(Customer cus)
	{
		return CusRep.save(cus);
	}
}
