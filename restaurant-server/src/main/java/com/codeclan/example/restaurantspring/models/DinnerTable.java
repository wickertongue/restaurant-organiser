package com.codeclan.example.restaurantspring.models;

import javax.persistence.*;

@Entity
@Table(name = "tables")
public class DinnerTable {

    // Properties

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "capacity")
    private int capacity;

    // Constructors

    public DinnerTable(int capacity) {
        this.capacity = capacity;
    }

    public DinnerTable() {
    }

    // Getters & Setters

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
