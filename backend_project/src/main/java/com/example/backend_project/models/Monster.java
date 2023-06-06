package com.example.backend_project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "monsters")
public class Monster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "type")
    private String type;


    @Column(name = "is_alive")
    private boolean isAlive;

    @Column(name = "hit_points")
    private int hitPoints;
    @Column
    private int maxDamage;
    @Column
    private int minDamage;

    @OneToMany(mappedBy = "monster")
    @JsonIgnoreProperties({"monster"})
    private List<Battle> battles;

    public Monster(String type,int maxDamage,int minDamage) {
        this.type = type;
        this.isAlive = true;
        this.battles = new ArrayList<>();
        this.hitPoints = 100;
        this.maxDamage = maxDamage;
        this.minDamage = minDamage;
    }

    public Monster(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isAlive() {
        return isAlive;
    }

    public void setAlive(boolean alive) {
        isAlive = alive;
    }

    public List<Battle> getBattles() {
        return battles;
    }

    public void setBattles(List<Battle> battles) {
        this.battles = battles;
    }

    public int getHitPoints() {
        return hitPoints;
    }

    public void setHitPoints(int hitPoints) {
        this.hitPoints = hitPoints;
    }

    public int getMaxDamage() {
        return maxDamage;
    }

    public void setMaxDamage(int maxDamage) {
        this.maxDamage = maxDamage;
    }

    public int getMinDamage() {
        return minDamage;
    }

    public void setMinDamage(int minDamage) {
        this.minDamage = minDamage;
    }
}
