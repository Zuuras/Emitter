package com.emitter.backend.entity;

import lombok.Data;
import javax.persistence.*;


@Entity
@Data
@Table(name = "likes")
public class Likes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "post_id")
    private Long postId;

    @Column(name = "like_counter")
    private Long likeCounter;
}
