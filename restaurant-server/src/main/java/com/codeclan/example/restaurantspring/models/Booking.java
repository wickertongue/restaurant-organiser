package com.codeclan.example.restaurantspring.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="bookings")
public class Booking {

    // Properties

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "time")
    private String time;

    @Column(name = "date")
    private String date;

    @JsonIgnoreProperties(value = "bookings")
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name = "duration")
    private int duration;

    @JsonIgnoreProperties(value = "bookings")
    @ManyToOne
    @JoinColumn(name = "dinnerTable_id", nullable = false)
    private DinnerTable table;

    @Column(name = "party_size")
    private int partySize;

    // Constructors

    public Booking(String time, String date, int partySize, Customer customer, DinnerTable table) {
        this.time = time;
        this.date = date;
        this.customer = customer;
        this.duration = 120;
        this.table = table;
        this.partySize = partySize;
    }

    public Booking() {
    }

    // Getters and Setters


    public DinnerTable getTable() {
        return table;
    }

    public void setTables(DinnerTable table) {
        this.table = table;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getPartySize() {
        return partySize;
    }

    public void setPartySize(int partySize) {
        this.partySize = partySize;
    }
}
