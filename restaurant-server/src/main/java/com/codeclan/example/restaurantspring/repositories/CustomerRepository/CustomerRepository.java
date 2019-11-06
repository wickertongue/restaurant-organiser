package com.codeclan.example.restaurantspring.repositories.CustomerRepository;

import com.codeclan.example.restaurantspring.models.Customer;
import com.codeclan.example.restaurantspring.projections.EmbedCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {

    @Query("SELECT c From Customer c ORDER BY c.bookings.size DESC")
     List<Customer> findAllOrderByNumberOfBookings();



}
