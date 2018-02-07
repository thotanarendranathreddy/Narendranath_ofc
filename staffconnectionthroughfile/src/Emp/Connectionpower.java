package Emp;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Connectionpower {
public static void main(String args[]) throws IOException{ 
		
		Properties dbprop=new Properties();
		FileInputStream file = null;
try {
	file=new FileInputStream("Connection.properties");
	
	
} catch (FileNotFoundException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
	
}	
              dbprop.load(file);
             String Url= dbprop.getProperty("URL");
		
            
		
}
}