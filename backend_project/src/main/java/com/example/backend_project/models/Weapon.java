package com.example.backend_project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
public class Weapon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String weaponName;
    @Column
    private int maxDamage;
    @Column
    private int minDamage;
    @Column
    private float blockChance;

    @OneToOne(mappedBy = "weapon")
    @JsonIgnoreProperties({"weapon"})
    private Player player;

    @Column(name ="price")
    private int price;

    @ManyToOne(cascade = {CascadeType.MERGE})
    @JoinColumn(name = "shop_id")
    @JsonIgnoreProperties({"weapons"})
    private Shop shop;


    public Weapon(String weaponName, int maxDamage, int minDamage, float blockChance, int price, Shop shop) {
        this.weaponName = weaponName;
        this.maxDamage = maxDamage;
        this.minDamage = minDamage;
        this.blockChance = blockChance;
        this.player = null;
        this.price = price;
        this.shop = shop;
    }

    public Weapon() {
    }

    public String getName() {
        return weaponName;
    }

    public void setName(String name) {
        this.weaponName = weaponName;
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

    public float getBlockChance() {
        return blockChance;
    }

    public void setBlockChance(float blockChance) {
        this.blockChance = blockChance;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Shop getShop() {
        return shop;
    }

    public void setShop(Shop shop) {
        this.shop = shop;
    }
}
