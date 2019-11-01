package com.codeclan.example.restaurantspring.repositories.DinnerTableRepository;

import com.codeclan.example.restaurantspring.models.DinnerTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DinnerTableRepository extends JpaRepository<DinnerTable, Long>, DinnerTableRepositoryCustom {
}
