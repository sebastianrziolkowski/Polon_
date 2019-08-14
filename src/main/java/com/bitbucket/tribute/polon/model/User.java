package com.bitbucket.tribute.polon.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "app_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "userName")
    private String userName;

    @Column(name = "userPassword")
    private String userPassword;

    @Column(name = "email")
    private String email;

    @Column(name = "active")
    private boolean active;

    public User(String userName, String userPassword, String email, boolean active) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.email = email;
        this.active = active;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUserName(String nameName) {
        this.userName = nameName;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", nameName='" + userName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", active=" + active +
                '}';
    }
}