package com.codeclan.example.restaurantspring.projections;

import com.codeclan.example.restaurantspring.models.Booking;
import com.codeclan.example.restaurantspring.models.Customer;
import com.codeclan.example.restaurantspring.models.DinnerTable;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedCustomer", types = Booking.class)
public interface EmbedCustomer {
    String getTime();
    String getDate();
    int getPartySize();
    int getDuration();
    Customer getCustomer();
    DinnerTable getTable();
}
