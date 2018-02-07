package es.rubenjgarcia.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());
    @RequestMapping("/task")
    public Response get() {
    	LOGGER.info("task");
        return new Response("Hello World!");
        
    }
}
