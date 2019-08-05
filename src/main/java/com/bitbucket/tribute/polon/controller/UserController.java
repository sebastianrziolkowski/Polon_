package com.bitbucket.tribute.polon.controller;

import com.bitbucket.tribute.polon.model.User;
import com.bitbucket.tribute.polon.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("")
public class UserController {

    @Autowired
    UserRepository repository;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        System.out.println("Get all Customers...");

        List<User> users = new ArrayList<>();
        repository.findAll().forEach(users::add);

        return users;
    }

    @PostMapping(value = "/users/create")
    public User postCustomer(@RequestBody User user) {

        return repository.save(new User(user.getUserName(), user.getUserPassword(), user.isActive()));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") long id) {
        System.out.println("Delete User with ID = " + id + "...");

        repository.deleteById(id);

        return new ResponseEntity<>("User has been deleted!", HttpStatus.OK);
    }

    @DeleteMapping("/users/delete")
    public ResponseEntity<String> deleteAllUsers() {
        System.out.println("Delete All Users...");

        repository.deleteAll();

        return new ResponseEntity<>("All users have been deleted!", HttpStatus.OK);
    }

    @GetMapping(value = "/users/name/{name}")
    public List<User> findByAge(@PathVariable String name) {

        List<User> users = repository.findByUserName(name);
        return users;
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
        System.out.println("Update user with ID = " + id + "...");

        Optional<User> userData = repository.findById(id);

        if (userData.isPresent()) {
            User _user = userData.get();
            _user.setUserName(user.getUserName());
            _user.setUserPassword(user.getUserPassword());
            _user.setActive(user.isActive());
            return new ResponseEntity<>(repository.save(_user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}