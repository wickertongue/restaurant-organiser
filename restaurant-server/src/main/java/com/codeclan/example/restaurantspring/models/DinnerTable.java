package com.codeclan.example.restaurantspring.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tables")
public class DinnerTable {

    // Properties

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "capacity")
    private int capacity;

    @ManyToMany
    @JoinTable(
            name = "dinnertables_bookings",
            joinColumns = { @JoinColumn(
                    name = "dinnerTable_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn(
                    name = "booking_id",
                    nullable = false,
                    updatable = false)
            })
    private List<Booking> bookings;

    // Constructors

    public DinnerTable(int capacity) {
        this.capacity = capacity;
        this.bookings = new ArrayList<>();
    }

    public DinnerTable() {
    }

    // Getters & Setters

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
}
