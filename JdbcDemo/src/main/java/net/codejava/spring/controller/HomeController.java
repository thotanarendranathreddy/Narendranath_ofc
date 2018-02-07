package net.codejava.spring.controller;

import java.util.ArrayList;
import java.util.List;

import net.codejava.spring.dao.ContactDAO;
import net.codejava.spring.model.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * This controller routes accesses to the application to the appropriate
 * hanlder methods. 
 * @author www.codejava.net
 *
 */
@RestController
public class HomeController {

	@Autowired
	private ContactDAO contactDAO;
	
	

	
	
	@RequestMapping(value = "/getAll", method = RequestMethod.GET,headers="Accept=application/json")
	public List<Customer> getAll() {
		List<Customer> listOfCountries = new ArrayList<Customer>();
		listOfCountries=contactDAO.get();
		System.out.println(listOfCountries);
		return listOfCountries;
	}
}
