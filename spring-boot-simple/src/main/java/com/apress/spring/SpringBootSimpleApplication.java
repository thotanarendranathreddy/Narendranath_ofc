package com.apress.spring;

import java.io.PrintStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.Banner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;

@SpringBootApplication
public class SpringBootSimpleApplication
{
	private static final Logger log = LoggerFactory.getLogger(SpringBootSimpleApplication.class);

	public static void main(String[] args)
	{
		SpringApplication app = new SpringApplication(SpringBootSimpleApplication.class);
		app.setBanner(new Banner()
		{
			@Override
			public void printBanner(Environment environment, Class<?> sourceClass, PrintStream out)
			{
				out.print("\n\n\tThis is my own banner!\n\n".toUpperCase());
			}
		});
		app.run(args);
	}

	@Bean
	String info()
	{
		return "Just a simple String bean";
	}

	@Autowired
	String			info;

	@Value("${data.server}")
	private String	server;

	@Bean
	CommandLineRunner myMethod()
	{
		return args -> {
			log.info("## > CommandLineRunner Implementation...");
			log.info("Accessing the Info bean: " + info);
			log.info("Accessing property server: " + server);
			for (String arg : args)
				log.info(arg);
		};
	}
}
