package com.example.TimeKeepers.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TimeKeepers.Model.Admin;
import com.example.TimeKeepers.Repos.AdminRepository;


@Service
public class AdminService {

	@Autowired
	AdminRepository AdminRep;
	
	public Admin createAdmin(Admin admin)
	{
		return AdminRep.save(admin);
	}
}
