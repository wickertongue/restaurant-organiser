package com.codeclan.example.restaurantspring.models;

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

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name = "duration")
    private int duration;

    @ManyToMany
    @JoinTable(
            name = "dinnertables_bookings",
            joinColumns = { @JoinColumn(
                    name = "booking_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn(
                    name = "dinnerTable_id",
                    nullable = false,
                    updatable = false)
            })
    private List<DinnerTable> tables;

    @Column(name = "party_size")
    private int partySize;

    // Constructors

    public Booking(String time, String date, int partySize, Customer customer) {
        this.time = time;
        this.date = date;
        this.customer = customer;
        this.duration = 120;
        this.tables = new ArrayList<>();
        this.partySize = partySize;
    }

    public Booking() {
    }

    // Misc Methods

    public void addTable(DinnerTable table) {
        this.tables.add(table);
    }

// Getters and Setters

    public void setTables(List<DinnerTable> tables) {
        this.tables = tables;
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

    public List<DinnerTable> getTables() {
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
