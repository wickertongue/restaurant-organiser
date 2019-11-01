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
    private int time;

    @Column(name = "date")
    private int date;

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

    public Booking(int time, int date , int partySize, Customer customer) {
        this.time = time;
        this.date = date;
        this.customer = customer;
        this.duration = 120;
        this.tables = new ArrayList<>();
        this.partySize = partySize;
    }

    public Booking() {
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
