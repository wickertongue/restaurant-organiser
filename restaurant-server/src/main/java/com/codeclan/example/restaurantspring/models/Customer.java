package com.codeclan.example.restaurantspring.models;

import javax.persistence.*;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name = "customers")
public class Customer {

    // Properties

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "customer")
    private ArrayList<Booking> bookings;

    // Constructors

    public Customer(String name) {
        this.name = name;
        this.bookings = new ArrayList<Booking>;
    }

    public Customer() {
    }

    // Getters & Setters

    public ArrayList<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(ArrayList<Booking> bookings) {
        this.bookings = bookings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
