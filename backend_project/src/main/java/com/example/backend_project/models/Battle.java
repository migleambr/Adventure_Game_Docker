package com.example.backend_project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity (name = "battles")
public class Battle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(cascade = {CascadeType.MERGE})
    @JoinColumn(name = "monster_id")
    @JsonIgnoreProperties({"battles"})
    private Monster monster;

    @Column(name = "location")
    private String location;

    @Column(name = "is_victorious")
    private boolean isVictorious;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "game_id")
    @JsonIgnoreProperties({"battles"})
    private Game game;


    public Battle(String location, Game game, Monster monster) {
        this.monster = monster;
        this.location = location;
        this.isVictorious = false;
        this.game = game;
    }

    public Battle(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Monster getMonster() {
    return monster;
    }

    public void setMonster(Monster monster) {
        this.monster = monster;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public boolean isVictorious() {
        return isVictorious;
    }

    public void setVictorious(boolean victorious) {
        isVictorious = victorious;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }
}
