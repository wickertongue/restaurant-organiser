package com.codeclan.example.restaurantspring.repositories.BookingRepository;

import com.codeclan.example.restaurantspring.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository  extends JpaRepository<Booking, Long>, BookingRepositoryCustom {
    List<Booking> findAllByDate(String date);
}
