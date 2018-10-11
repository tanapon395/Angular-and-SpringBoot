package com.sut.sa.cpe.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sut.sa.cpe.entity.User;
import com.sut.sa.cpe.entity.Video;
import com.sut.sa.cpe.repository.UserRepository;
import com.sut.sa.cpe.repository.VideoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URLDecoder;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
class VideoController {

    @Autowired
    private final VideoRepository videoRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    VideoController(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

    @GetMapping("/Videos")
    public Collection<Video> Video() {
        return videoRepository.findAll().stream().collect(Collectors.toList());
    }

    // curl -iX POST -H 'Content-Type: application/json' -d
    // {\"code\":\"r4j6H-f9j8Y\",\"url\":\"https://www.youtube.com/watch?v=r4j6H-f9j8Y\",\"title\":\"Lanla(LaLaLa)byJanChan\"} http://localhost:8080/UpVideo/Tanapon

    @PostMapping("/UpVideo/{userName}")
    public Video newVideo(@RequestBody Video newVideo, @PathVariable String userName) {
            User userUpper = userRepository.findByUsername(userName);
            newVideo.setVideoUser(userUpper); // get User Id เพื่อ set User Id บน Object ชื่อ video
          return  videoRepository.save(newVideo); // บันทึก Objcet ชื่อ video
        }
    }