package net.codejava.spring.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import net.codejava.spring.model.Customer;

import org.springframework.jdbc.core.JdbcTemplate;

/**
 * An implementation of the ContactDAO interface.
 * 
 * @author www.codejava.net
 *
 */
public class ContactDAOImpl implements ContactDAO {

	private JdbcTemplate jdbcTemplate;

	public ContactDAOImpl(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	@Override
	public List<Customer> get() {

		String sql = "SELECT * FROM employee";
		List<Customer> listCustomer = new ArrayList<Customer>();
		List<Map<String, Object>> rows=jdbcTemplate.queryForList(sql);
		for (Map<String, Object> row : rows) {
			Customer customer = new Customer();
			String intValue=row.get("id").toString();
			customer.setId(Integer.parseInt(intValue));
			customer.setName((String)row.get("name"));
			intValue=row.get("salary").toString();
			customer.setSalary(Integer.parseInt(intValue));
			customer.setDept((String)row.get("dept"));
			listCustomer.add(customer);
		}
		return listCustomer;
	}

}
