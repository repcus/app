package com.carrental.app.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Entity
@Table(name = "rentals",schema = "public")

public class Rentals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "rentdate")
    private Date rentdate;
    @Column(name = "returndate")
    private Date returndate;
    @Column(name = "isreturned")
    private Boolean isreturned;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "Users",referencedColumnName = "id")
    private Users users;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "Cars",referencedColumnName = "id")
    private Cars cars;
}
