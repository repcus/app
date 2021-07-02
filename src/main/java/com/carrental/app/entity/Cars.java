package com.carrental.app.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Entity
@Table(name = "cars",schema = "public")

public class Cars{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "make")
    private String make;
    @Column(name = "model")
    private String model;
    @Column(name = "mileage")
    private Integer mileage;
    @Column(name = "rating")
    private Integer rating;
    @Column(name = "isrented")
    private Boolean isrented;
    @Column(name = "carsegment")
    private String carsegment;
    @Column(name = "vechicalregistracionnumber")
    private String vechicalregistracionnumber;
    @Column(name = "productionyear")
    private String productionyear;
    @Column(name = "rentprice")
    private Integer rentprice;
    @Column(name = "color")
    private String color;
    @Column(name = "engine")
    private String engine;
}
