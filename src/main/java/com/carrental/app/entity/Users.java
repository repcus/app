package com.carrental.app.entity;

import lombok.*;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Entity
@Table(name = "users",schema = "public")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "pass")
    private String pass;
    @Column(name = "username")
    private String username;
    @Column(name = "userrole")
    private Integer userrole;
    @Column(name = "email")
    private String email;
    @Column(name = "nameofuser")
    private String nameofuser;
    @Column(name = "surrname")
    private String surrname;
    @Column(name = "phonenumber")
    private Integer phonenumber;
}
