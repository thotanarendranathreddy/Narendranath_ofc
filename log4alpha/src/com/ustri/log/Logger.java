package com.ustri.log;

import java.io.BufferedWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Class Logger implements Log interface and it is the central class in Log4alpha API. Most Logging Operations and Configurations are done through this class. 
 * @author alphaTeam2
 * @since 14-02-2017 
 */
public class Logger implements Log{


	protected static BufferedWriter fout=null;
	protected static int traceCount=0;
	protected static  Logger logger=null;
	protected static String file_Name=null;

	/**
	 * In this constructor,system date and class name are set in the created log file.
	 * The name and path of the file is returned from the fileName method from FileManager class 
	 * @param file_Name it is a static variable it contains file name from FileManager mentioned in the corresponding path 
	 */
	private Logger(){

		try{
			
			file_Name=FileManager.fileName();
			
			fout=FileManager.fileSelect(file_Name);
			
			if(FileManager.append==false){
				fout.write("Log File created :-  "+"  Created Date: ");
				sysDate();
				fout.write("=========================================================");
			}else{
				
				fout.write("__________________________________________________________");
				fout.newLine();
				fout.newLine();
				fout.write("Logger created  : ");
				sysDate();
				fout.write("+++++++++++++++++++++++++++++");
			}

		}catch(Exception e){
			e.printStackTrace();
		}


	}
	/**
	 * 
	 * @return file_Name it  will return the filename when ever user invoke this function
	 * It will maintain the static filename 
	 */
	public static String getFilename(){
		
		
			return file_Name;
		
	}

	/**
	 * <p>
	 * If the  Logger object already exist, then the existing instance will be returned. 
	 * Otherwise, a new instance will be created.
	 * Note: synchronized Logger</p>
	 * @return logger it is an an object of the class Logger
	 */	

	public static synchronized Logger getLogger(){
	
		if(logger == null){
			logger = new Logger();
		}

		return logger;

	}
		
	
	
	/**
	 * Log a parameterized message into a log file along with the class name from which it is invoked.
	 * @param inf it contains the information to be logged into the file.
	 */
	

	@Override
	public void info(String inf){

		try {
			fout.newLine();
			sysDate();
			fout.write("[INFO] : ");

			getTrace("info");

			fout.newLine();
			fout.write(inf);
			fout.newLine();
			fout.flush();

		} catch (IOException e) {
			e.printStackTrace();
		}
		

	}

	/**
	 * Log a parameterized message into a log file along with the class name from which it is invoked.
	 * @param err it contains the information about the Exception occurred.
	 */
	

	@Override
	public  void error(Exception err){

		try {
			fout.newLine();
			sysDate();
			fout.write("[Error] : ");
			final StackTraceElement[] stackTrace = err.getStackTrace();

			for (StackTraceElement element : stackTrace){
				fout.write(String.valueOf(element));
				fout.newLine();

			}
			fout.write("\"Source of the Error  Found\"\t : ");
			fout.newLine();
			fout.write(String.valueOf(err.fillInStackTrace()));
			fout.newLine();
			fout.flush();

		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	/**
	 * Log a parameterized message into a log file along with the class name from which it is invoked.
	 * @param err it writes the error information into the file.
	 */
	


	@Override
	public void error(String err){

		try {
			fout.newLine();
			sysDate();
			fout.write("[Error] : ");

			getTrace("error");

			fout.newLine();
			fout.write(err);
			fout.newLine();
			fout.flush();


		} catch (IOException e) {
			e.printStackTrace();
		}

	}


	/**
	 * Log a parameterized message into a log file along with the class name from which it is invoked.
	 * @param dbg it writes the debug information into the file.
	 */
	@Override
	public void debug(String dbg){

		try {
			fout.newLine();
			sysDate();
			fout.write("[Debug] : ");
			getTrace("debug");
			fout.newLine();
			fout.write(dbg);
			fout.newLine();
			fout.flush();


		} catch (IOException e) {

			e.printStackTrace();
		}
	}
	/**
	 * Log a parameterized message into a log file along with the class name from which it is invoked.
	 * @param dbg it writes the debug information into the file.
	 * @param obj it will change that part of the debug information with the user given data. 
	 
	 */
	@Override
	public  void debug(String dbg,Object obj){

		try {
			fout.newLine();
			sysDate();
			fout.write("[Debug] : ");

			getTrace("debug");			
			String s=dbg.replace("{}",String.valueOf(obj));
			fout.write(s);
			fout.newLine();
			fout.flush();


		} catch (IOException e) {
			
			e.printStackTrace();
		}

	}
	/**
	 * Close the file.
	 */
	@Override
	public void close(){
		try {
			fout.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}


/**
 * It writes the current system date into the log file.
 */

	public static void sysDate(){
		Date d=new Date();
		SimpleDateFormat swd=new SimpleDateFormat("E yyyy/MM/dd @ hh/mm/ss a zzz");
		try {
			fout.write(swd.format(d));
			fout.newLine(); 
		} catch (IOException e) {
			e.printStackTrace();
		}

	}


	/**
	 * Log a message object with the Trace level including the Stack trace of the methodName passed as parameter. 
	 * @param methodName it accepts the current method name from the application.
	 */
	public void getTrace(String methodName){

		// Origin of the thread
		traceCount=0;
		StackTraceElement[] stackTrace =Thread.currentThread().getStackTrace();
		for(StackTraceElement traceElement:stackTrace){
			traceCount++;
			if(traceElement.getMethodName().equals(methodName)){
				break;
			}
		}
		try {
			fout.write(String.valueOf(stackTrace[traceCount--]));
		} catch (IOException e) {
			e.printStackTrace();
		}
		// End of the thread
	}


}
