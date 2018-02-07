package com.ustri.springmvc_junitTest;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import com.ustri.Test.DeleteTest;
import com.ustri.Test.UpdateTest;
import com.ustri.Test.getAll;
import com.ustri.Test.getEmp;

@RunWith(Suite.class)

@Suite.SuiteClasses({
  
	//InsertTest.class,
	DeleteTest.class,
	getAll.class,
	getEmp.class,
	UpdateTest.class
	
	
})

public class TestSuite {   
}  	