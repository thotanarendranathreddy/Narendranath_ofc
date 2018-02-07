package com.test.start;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@EnableAutoConfiguration
@SpringBootApplication
@ComponentScan(basePackages = {"com"}) 
@RequestMapping("/issue")
@RestController 
public class Kafka {

	public static void main(String[] args) {

		SpringApplication.run(
				new Object[] { Kafka.class }, args);
	}
}