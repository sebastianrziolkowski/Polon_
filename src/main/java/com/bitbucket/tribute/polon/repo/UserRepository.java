package com.bitbucket.tribute.polon.repo;

import com.bitbucket.tribute.polon.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findByUserName(String name);
}