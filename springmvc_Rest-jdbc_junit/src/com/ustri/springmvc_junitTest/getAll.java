package com.ustri.springmvc_junitTest;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;

import com.ustri.config.MvcConfiguration;
import com.ustri.dao.ContactDAO;
import com.ustri.dao.ContactDAOImpl;
import com.ustri.model.Employee;

public class getAll {

	
	MvcConfiguration mvc=new MvcConfiguration();
	ContactDAO imp=new ContactDAOImpl(mvc.getDataSource());
		Employee c=new Employee();
		@Test
	public void getall() {
		    	int i=1;
			    String[] names=new String[10];
			    names[1]="Alex";
			    names[2]="Narendranath Reddy";
			    names[3]="mason";
			    names[4]="navy";
			String name = "name";
			List<Employee> status=imp.getAll(name);
			while(i<=2){
			for(Employee cust:status){
			assertEquals(names[i],cust.getName());
			i++;
			}
			}
		}
}
