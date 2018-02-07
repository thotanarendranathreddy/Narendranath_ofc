package com.ustri.log;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Properties;
/**
 * Class FileManager handles with files related to Log4alpha API.
 * NOTE: append,LogCount and path values are private variables and should be specified by the user in the application by properties file.
 * If append is false, a new log file will be created.
 * If append is true, the content will be added to the previous generated file.
 * logCount variable will accept numeric values
 * path variable will accept the path of the file name.
 * @author alphaTeam2
 * @since 14-02-2017 
 */
public class FileManager {
	
	private static File file=null;
	private static FileWriter writer=null;
	private static int logCount=0;
	private static String fileName=null;
	protected static boolean append;
	
	/**<p> It makes use of the values in the config.properties and set the path required to create or use the existing log file.</p>
	 * @return filename, it contains corresponding path provided by the user in properties file.
	 * properties file should be added by the user in the application
	 */
	protected static String fileName(){
		try{
	
			
			Properties properties= new Properties();
			FileInputStream propertyFile=new FileInputStream("config.properties");
			properties.load(propertyFile);
			
			append=Boolean.parseBoolean(properties.getProperty("append"));
			String path=properties.getProperty("path");
			logCount=Integer.parseInt(properties.getProperty("logCount"));
			if(append==true){
				fileName=path+"log"+logCount+".txt";
			}
			else{
				fileName=path+"log"+(++logCount)+".txt";
				String logCountCopy=String.valueOf(logCount);
				
				properties.setProperty("logCount",logCountCopy);
				properties.setProperty("append",String.valueOf(append));
				properties.setProperty("path",path);
				properties.store(new FileWriter("config.properties"),"\"log Management System\"");
				
			}
			
		}catch (FileNotFoundException e) {
			e.printStackTrace();

		} catch (IOException e) {
			e.printStackTrace();
		}
		return fileName;
		
		
	}
	
	/**<p>It creates or makes use of the existing log file.</p>
	 * @return writer, it  has  object used to write to a file
	 */
	protected static BufferedWriter fileSelect(String fileName){
		
		file=new File(fileName);
				
		try {
			
			//If file write path is invalid it will create a new file
			if(!file.exists()){
				file.createNewFile();
			} 
			writer=new FileWriter(file,true);
			
			// If required it will execute or if file exist if condition fails 
			
			
		} catch (IOException e) {
			
			e.printStackTrace();
		}
		System.out.println("");
		return new BufferedWriter(writer);
		
		
	}
	
	
}
