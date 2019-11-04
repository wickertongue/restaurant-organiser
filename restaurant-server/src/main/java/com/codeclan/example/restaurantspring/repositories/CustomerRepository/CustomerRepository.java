package com.codeclan.example.restaurantspring.repositories.CustomerRepository;

import com.codeclan.example.restaurantspring.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {

    // List<Customer> findAllOrderByNumberOfBookingsDesc();

    // find number of all bookings by customer
    // find all bookings by customer
    // FindByBookingsContainsOrderByNumberOfBookingsDesc
}
