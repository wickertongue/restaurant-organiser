package com.codeclan.example.restaurantspring.repositories.BookingRepository;

import com.codeclan.example.restaurantspring.models.Booking;
import com.codeclan.example.restaurantspring.projections.EmbedCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedCustomer.class)
public interface BookingRepository  extends JpaRepository<Booking, Long>, BookingRepositoryCustom {
    List<Booking> findAllByDate(String date);
}
