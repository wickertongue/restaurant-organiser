package com.codeclan.example.restaurantspring.components;

import com.codeclan.example.restaurantspring.models.Booking;
import com.codeclan.example.restaurantspring.models.Customer;
import com.codeclan.example.restaurantspring.models.DinnerTable;
import com.codeclan.example.restaurantspring.repositories.BookingRepository.BookingRepository;
import com.codeclan.example.restaurantspring.repositories.CustomerRepository.CustomerRepository;
import com.codeclan.example.restaurantspring.repositories.DinnerTableRepository.DinnerTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    DinnerTableRepository dinnerTableRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        // Customers

        Customer customer1 = new Customer("John");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Charlotte");
        customerRepository.save(customer2);

        // Tables

        DinnerTable table1 = new DinnerTable(4);
        dinnerTableRepository.save(table1);

        DinnerTable table2 = new DinnerTable(2);
        dinnerTableRepository.save(table2);

        DinnerTable table3 = new DinnerTable(8);
        dinnerTableRepository.save(table1);

        DinnerTable table4 = new DinnerTable(10);
        dinnerTableRepository.save(table4);

        // Bookings

        Booking booking1 = new Booking("18:00", "findme", 2, customer1, table1);
        bookingRepository.save(booking1);

        Booking booking2 = new Booking("21:00", "15/05/2015", 6, customer2, table2);
        bookingRepository.save(booking2);
//
//        Booking booking3 = new Booking("13:00", "03/09/2017", 3, customer2, table2);
//        bookingRepository.save(booking3);
//
//        Booking booking4 = new Booking("09:00", "01/12/2012", 9, customer2, table3);
//        bookingRepository.save(booking4);

    }
}
