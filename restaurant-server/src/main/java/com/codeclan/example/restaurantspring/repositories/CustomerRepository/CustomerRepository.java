package com.codeclan.example.restaurantspring.repositories.CustomerRepository;

import com.codeclan.example.restaurantspring.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {
}
