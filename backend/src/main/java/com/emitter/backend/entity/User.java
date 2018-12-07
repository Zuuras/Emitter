
package com.emitter.backend.entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @Column(name = "username")
    private String userName;


    @Column(name = "usersurname")
    private String userSurname;


    @Column(name = "userlogin")
    private String userLogin;


    @Column(name = "userpassword")
    private String userPassword;


    @Column(name = "userrole")
    private String userRole;


    @Column(name = "useradress")
    private String userAdress;


    @Column(name = "userphone")
    private String userPhone;


    @Column(name = "usermail")
    private String userMail;


    @Column(name = "userphoto")
    private String userPhoto;


    @Column(name = "usergender")
    private String userGender;

    @Column(name = "userbirth")
    private String  dateOfBirth;
}
