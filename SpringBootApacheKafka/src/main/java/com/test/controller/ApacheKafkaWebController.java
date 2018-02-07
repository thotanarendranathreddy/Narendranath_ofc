package com.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.test.service.KafkaSender;

@RequestMapping("/kafka")
@RestController
public class ApacheKafkaWebController {

	@Autowired
	KafkaSender kafkaSender;

	@RequestMapping(value = "/produce", method = RequestMethod.POST)
	@ResponseBody
	public String producer(@RequestBody String message ) {
		kafkaSender.send(message);
		System.out.println("*********************************"+message);
		return "Message sent to the Kafka Topic narendranath Successfully";
	}

}
