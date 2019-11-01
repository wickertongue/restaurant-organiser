package com.codeclan.example.restaurantspring.models;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name = "customers")
public class Customer {

    // Properties

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    // Constructors

    public Customer(String name) {
        this.name = name;
    }

    public Customer() {
    }

    // Getters & Setters

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
