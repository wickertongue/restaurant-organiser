package com.codeclan.example.restaurantspring.repositories.BookingRepository;

import com.codeclan.example.restaurantspring.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository  extends JpaRepository<Booking, Long>, BookingRepositoryCustom {
}
