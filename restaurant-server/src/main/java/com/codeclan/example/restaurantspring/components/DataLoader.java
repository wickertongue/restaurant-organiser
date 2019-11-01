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

        Customer customer1 = new Customer("John");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Charlotte");
        customerRepository.save(customer2);

        DinnerTable table1 = new DinnerTable(4);
        dinnerTableRepository.save(table1);

        DinnerTable table2 = new DinnerTable(2);
        dinnerTableRepository.save(table1);

        DinnerTable table3 = new DinnerTable(8);
        dinnerTableRepository.save(table1);

        Booking booking1 = new Booking("18:00", "01/11/2019", 2, customer1);
        bookingRepository.save(booking1);

        booking1.addTable(table1);
        bookingRepository.save(booking1);

    }
}
