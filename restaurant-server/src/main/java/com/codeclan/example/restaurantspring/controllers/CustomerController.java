package com.codeclan.example.restaurantspring.controllers;

import com.codeclan.example.restaurantspring.models.Customer;
import com.codeclan.example.restaurantspring.repositories.CustomerRepository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping(value = "/byNumberOfBookings")
    public List <Customer> getAllCustomersByNumberOfBookings() {
        return customerRepository.findAllOrderByNumberOfBookings();
    }

}
