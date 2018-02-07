package Emp;

import java.sql.Connection;

public interface Staffdao {
	
	
	
	 public Connection getDataSource();
	 public void  create(Staff temp); 
	 public  void getStaffDetails(int staffID);
	 public Staff[]  listAllStaffDetails(); 
	 public void delete(int StaffID); 
	 public String  update(int staffID, float SalBonus); 

}
