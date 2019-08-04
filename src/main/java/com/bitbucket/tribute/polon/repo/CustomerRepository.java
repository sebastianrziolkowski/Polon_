package com.bitbucket.tribute.polon.repo;

import java.util.List;

import com.bitbucket.tribute.polon.model.Customer;
import org.springframework.data.repository.CrudRepository;


public interface CustomerRepository extends CrudRepository<Customer, Long> {
    List<Customer> findByAge(int age);
}