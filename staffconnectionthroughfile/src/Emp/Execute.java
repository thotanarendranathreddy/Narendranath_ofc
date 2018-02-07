package Emp;


import java.util.Scanner;

/**
* <h1> Menu List For Staff Data Base </h1>
* This program implements an application called
* Staff data base record management
* we can create record
* can display particular record
* can display all records
* can delete one particular record 
* can update the data base
* @author Narendranath Reddy
*/

public class Execute{
	
	/**
	   *This main method is used to display the menu to user
	   *1 for create connection
	   *2 for create record
	   *3 for get particular record details
	   *4 for display all staff details
	   *5 for delete a record
	   *6 for update a record
	   */
	public static void main(String[] args){
		
		
		
    	Operation op=new Operation();
    	int a;
    	
    	do{
		System.out.println("-------Please select the Menu-------");
		System.out.println("1 for connection");
		System.out.println("2 for create record");
		System.out.println("3 for get particular id details ");
		System.out.println("4 for Display all the staff details");
		System.out.println("5 for Delete a record");
		System.out.println("6 for update a record");
		
		Scanner kbd=new Scanner(System.in);
		a=kbd.nextInt();
		
		
		switch(a) {
		
	    case 1:
	  
	    	op.getDataSource();
	    	break;
	    	
	    case 2:{
	    	Staff stf=new Staff();
	    	op.getDataSource();
	    	System.out.println("please enter the id");
	    	stf.setId(kbd.nextInt());
	    	kbd.nextLine();
	    	System.out.println("please enter the Name");
	    	stf.setName(kbd.nextLine());
	    	//kbd.nextFloat();
	    	System.out.println("please enter the salary");
	    	stf.setSalary(kbd.nextFloat());
	    	kbd.nextLine();
	    	System.out.println("please enter the department");
	    	stf.setDept(kbd.nextLine());
	    	//kbd.nextLine();
	    	System.out.println("please enter the city");
	    	stf.setCity(kbd.nextLine());
	    	
	    	op.create(stf);}
	    	
	    	break;
	    	
	    case 3:
	    	op.getDataSource();
	    	int b=0;
	    	System.out.println("please enter the id to display records");
	    	b=kbd.nextInt();
	    	op.getStaffDetails(b);break;
	    	
	    case 4:
	    	
	    	op.getDataSource();
	    	
	    	 Staff s[]=op.listAllStaffDetails();
	    	int i =0;
	    	while(s[i]!=null){

	    	System.out.println(s[i].getId()+","+s[i].getSalary()+","+s[i].getName()+","+s[i].getDept()+","+s[i].getCity());
	    	i++;
	    	
	    	}
	    	
	    	break;
	    case 5:
	    	op.getDataSource();
	    	int c=0;
	    	System.out.println("please enter the id to delete record");
	    	c=kbd.nextInt();
	    	op.delete(c);
	    	
	    	break;
	    	
	    	
	    case 6:
	    	op.getDataSource();
	    	int d=0;
	    	float p;
	    	String k;
	    	System.out.println("please enter the id to update salary");
	    	d=kbd.nextInt();
	    	System.out.println("please enter Bonus  salary");
	    	p=kbd.nextFloat();
	    	
	    	k=op.update(d,p);
	    	System.out.println(k);
	    	break;
	    	
	    	
	    
		
		
		
		}
		}while(a<=3);
		
		
		
		
	}
	
}