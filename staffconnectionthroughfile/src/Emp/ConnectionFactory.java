package Emp;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;




public class ConnectionFactory{
	// static since it will maintain only one copy accross the application



    private static ConnectionFactory instance = new ConnectionFactory();   



    Connection dbconnection= null; 
	PreparedStatement prst=null;
	Properties dbprop=new Properties();
	FileInputStream file = null;

    // private constructor

    private ConnectionFactory() {   

                    try {
            		try {
            			file=new FileInputStream("Connection.properties");
            			
            			
            		} catch (FileNotFoundException e) {
            			// TODO Auto-generated catch block
            			e.printStackTrace();
            			
            		}	
            		              dbprop.load(file);

                                    Class.forName(dbprop.getProperty("DRIVER_CLASS"));

                    } catch (ClassNotFoundException e) {

                                    e.printStackTrace();

                    } catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}

    }

    

    

    // private function that generates the connection

    private Connection createConnection() {

                    

                    try {
                    	try {
                			file=new FileInputStream("Connection.properties");
                			
                			
                		} catch (FileNotFoundException e) {
                			// TODO Auto-generated catch block
                			e.printStackTrace();
                			
                		}	
                		              dbprop.load(file);
                		              
                		              String Url=dbprop.getProperty("URL");
                		              String User=dbprop.getProperty("USER");
                		              String Password=dbprop.getProperty("PASSWORD");
                		              
                                    if (dbconnection==null) {

              dbconnection = DriverManager.getConnection(Url, User, Password);

                           System.out.println("\n\nConnected with Oracle .. New Connection Object Returned to Proceed !!");

                                    }else {
                                    	System.out.println("Exesting connection is used");
                                    }

                    } catch (SQLException | IOException e) {

                                    System.out.println("ERROR: Unable to Connect to Database.");

                    }

                    return dbconnection;

    }              

    

    // static function outlet for the object.

    public static Connection getConnection() {

                    return instance.createConnection();

    }

    

    

}
	

	

	
	
	
	
	
	
	
	
	
	
