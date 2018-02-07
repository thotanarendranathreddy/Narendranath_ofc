package com.ustri.log;

/**
 * Log is an interface in log4alpha.jar API, which contains abstract methods used to log operations for 
 * @author alphaTeam2
 * @since 14-04-2017 
 */
public interface Log {
	
	public abstract void info(String inf);
	public abstract void error(Exception err);
	public abstract void error(String err);
	public abstract void debug(String dbg);
	public abstract void debug(String dbg,Object obj);
	public abstract void close();
	
}
