package com.codeclan.example.restaurantspring.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;

public class Booking {

    // Properties

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int time;
    private int date;
    private Customer customer;
    private int duration;
    private ArrayList<DinnerTable> tables;
    private int partySize;

    // Constructors

    public Booking(int time, int date , int partySize, Customer customer) {
        this.time = time;
        this.date = date;
        this.customer = customer;
        this.duration = 120;
        this.tables = tables;
        this.partySize = partySize;
    }

    public Booking() {
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public int getDate() {
        return date;
    }

    public void setDate(int date) {
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

    public ArrayList<DinnerTable> getTables() {
        return tables;
    }

    public void setTables(ArrayList<DinnerTable> tables) {
        this.tables = tables;
    }

    public int getPartySize() {
        return partySize;
    }

    public void setPartySize(int partySize) {
        this.partySize = partySize;
    }
}
