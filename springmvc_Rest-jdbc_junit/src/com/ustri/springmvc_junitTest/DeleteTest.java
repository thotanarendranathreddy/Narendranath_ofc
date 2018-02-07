package com.ustri.springmvc_junitTest;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.ustri.config.MvcConfiguration;
import com.ustri.dao.ContactDAO;
import com.ustri.dao.ContactDAOImpl;

public class DeleteTest {

	
	MvcConfiguration mvc=new MvcConfiguration();
	ContactDAO imp=new ContactDAOImpl(mvc.getDataSource());
	@Test
	   public void delete() {
	
		boolean status=imp.delete(1802);
		assertEquals(false,status);
	}
}
