package net.codejava.spring.dao;

import java.util.List;

import net.codejava.spring.model.Customer;

/**
 * Defines DAO operations for the contact model.
 * @author www.codejava.net
 *
 */
public interface ContactDAO {
	
	public List<Customer> get();
		
}
