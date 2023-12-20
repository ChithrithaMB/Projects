package com.example.TimeKeepers.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.TimeKeepers.Model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{
	
}
