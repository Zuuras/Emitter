package com.emitter.backend.entity;


import javax.persistence.Entity;
import javax.persistence.Table;
//import lombok.Data;

@Entity
@Table(name="user")
//@Data
public class User {
  private String  user_login;
  private String  user_password;
  private String  user_role;
  private String  user_name;
  private String  user_surname;
  private String  nickname;
  private String  user_adress;
  private String  user_phone;
  private String  user_mail;
  private String  user_photo;
  private String  user_gender;
  private Long user_id;

  public String getUser_login() {
    return user_login;
  }

  public void setUser_login(String user_login) {
    this.user_login = user_login;
  }

  public String getUser_password() {
    return user_password;
  }

  public void setUser_password(String user_password) {
    this.user_password = user_password;
  }

  public String getUser_role() {
    return user_role;
  }

  public void setUser_role(String user_role) {
    this.user_role = user_role;
  }

  public String getUser_name() {
    return user_name;
  }

  public void setUser_name(String user_name) {
    this.user_name = user_name;
  }

  public String getUser_surname() {
    return user_surname;
  }

  public void setUser_surname(String user_surname) {
    this.user_surname = user_surname;
  }

  public String getNickname() {
    return nickname;
  }

  public void setNickname(String nickname) {
    this.nickname = nickname;
  }

  public String getUser_adress() {
    return user_adress;
  }

  public void setUser_adress(String user_adress) {
    this.user_adress = user_adress;
  }

  public String getUser_phone() {
    return user_phone;
  }

  public void setUser_phone(String user_phone) {
    this.user_phone = user_phone;
  }

  public String getUser_mail() {
    return user_mail;
  }

  public void setUser_mail(String user_mail) {
    this.user_mail = user_mail;
  }

  public String getUser_photo() {
    return user_photo;
  }

  public void setUser_photo(String user_photo) {
    this.user_photo = user_photo;
  }

  public String getUser_gender() {
    return user_gender;
  }

  public void setUser_gender(String user_gender) {
    this.user_gender = user_gender;
  }

  public Long getUser_id() {
    return user_id;
  }

  public void setUser_id(Long user_id) {
    this.user_id = user_id;
  }


}
