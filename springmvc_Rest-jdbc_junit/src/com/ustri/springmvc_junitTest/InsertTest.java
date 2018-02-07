package com.ustri.springmvc_junitTest;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.ustri.config.MvcConfiguration;
import com.ustri.dao.ContactDAO;
import com.ustri.dao.ContactDAOImpl;
import com.ustri.model.Employee;




public class InsertTest {

MvcConfiguration mvc=new MvcConfiguration();
ContactDAO imp=new ContactDAOImpl(mvc.getDataSource());
Employee c=new Employee();
	@Test
	   public void create() {
	
		boolean status=imp.create("navy", 9898, "Army");
		assertEquals(false,status);
		
	}

}
