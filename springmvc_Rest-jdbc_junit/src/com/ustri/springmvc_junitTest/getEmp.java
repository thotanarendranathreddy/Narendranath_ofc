package com.ustri.springmvc_junitTest;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;

import com.ustri.config.MvcConfiguration;
import com.ustri.dao.ContactDAO;
import com.ustri.dao.ContactDAOImpl;
import com.ustri.model.Employee;

public class getEmp {

	
	MvcConfiguration mvc=new MvcConfiguration();
	ContactDAO imp=new ContactDAOImpl(mvc.getDataSource());
		Employee c=new Employee();
		@Test
		   public void get() {
		
			List<Employee> status=imp.get(1652);
			
			for(Employee cust:status){
				
			assertEquals("navy",cust.getName());
			}
		}
}
