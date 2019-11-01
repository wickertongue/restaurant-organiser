package com.codeclan.example.restaurantspring.models;

public class Booking {
    private int time;
    private int date;
    private Customer customer;
    private int duration;
    private ArrayList<Table> tables;
    private int partySize;

    public Booking(int time, int date , int partySize, Customer customer) {
        this.time = time;
        this.date = date;
        this.customer = customer;
        this.duration = 120;
        this.tables = tables;
        this.partySize = partySize;
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

    public ArrayList<Table> getTables() {
        return tables;
    }

    public void setTables(ArrayList<Table> tables) {
        this.tables = tables;
    }

    public int getPartySize() {
        return partySize;
    }

    public void setPartySize(int partySize) {
        this.partySize = partySize;
    }
}
