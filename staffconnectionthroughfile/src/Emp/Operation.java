package Emp;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;


public  class Operation  implements Staffdao{
	
	
	PreparedStatement prst=null;
	Scanner kbd=new Scanner(System.in);
	Connection dbConnection = null;
	Statement st=null;
	ResultSet rs=null;
	

	public Connection getDataSource() {
		
		Connection dbConnection = ConnectionFactory.getConnection();
		
		return dbConnection;
	}

	public void create(Staff temp) {
		
		
		
try {
	Connection dbConnection = ConnectionFactory.getConnection();
	
		
	prst=dbConnection.prepareStatement("insert into staff values(?,?,?,?,?)");
		 prst.setInt(1, temp.getId());
		 prst.setString(2, temp.getName());
         prst.setFloat(3, temp.getSalary());
         prst.setString(4, temp.getDept());
         prst.setString(5, temp.getCity());
         prst.executeUpdate();
} catch (SQLException e) {
			
			e.printStackTrace();
			System.out.println(e.getMessage());
		}

		
		
	}

	public void getStaffDetails(int staffID) {
		
	
	
		try {
			Connection dbConnection = ConnectionFactory.getConnection();
			st =dbConnection.createStatement();
			rs=st.executeQuery("select *  from staff where id='"+staffID+"'   ");
		
		
		while(rs.next()){
			System.out.println(rs.getInt(1)+","+rs.getString(2)+","+rs.getFloat(3)+","+rs.getString(4)+","+rs.getString(5));
		
		} 
		}catch (SQLException e) {
			
			e.printStackTrace();
		}
		
		
		
	}

	public Staff[] listAllStaffDetails() {
		Staff s[]=new Staff[130];
		
		try {
			Connection dbConnection = ConnectionFactory.getConnection();
			st =dbConnection.createStatement();
			rs=st.executeQuery("select *  from staff  ");
		
					
		
			int i=0;
		while(rs.next()){
		
			s[i] = new Staff();
			s[i].setId(rs.getInt(1));
			s[i].setName(rs.getString(2));
			s[i].setSalary(rs.getFloat(3));
			s[i].setDept(rs.getString(4));
			s[i].setCity(rs.getString(5));
			
			i++;
			
		}           
	}catch (SQLException e) {
		
		e.printStackTrace();
	}finally {
		
        try { st.close();dbConnection.close(); } catch (Exception ignore) { }
    }
		return (s);
		

	
}
		
		
	
	public void delete(int StaffID) {
	
		try {
			Connection dbConnection = ConnectionFactory.getConnection();
			
			prst=dbConnection.prepareStatement("delete from staff where id =?");
			 prst.setInt(1, StaffID);
			 
	         prst.executeUpdate();
	} catch (SQLException e) {
				
				e.printStackTrace();
				System.out.println(e.getMessage());
			}


		
	}

	public String update(int staffID, float SalBonus) {
		
		
try {
	Connection dbConnection = ConnectionFactory.getConnection();
			prst=dbConnection.prepareStatement("update staff set salary=salary+? where id =?");
			
			 prst.setInt(1, staffID);
			 prst.setFloat(2, SalBonus);
	         prst.executeUpdate();
	} catch (SQLException e) {
				
				e.printStackTrace();
				System.out.println(e.getMessage());
			}
		
		String u="Salary has been updated";
		return u;
	}



}
