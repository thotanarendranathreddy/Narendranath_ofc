package com.javatpoint;

public class Employee {
private int id;
private String name;
private float salary;
public Employee() {}
public Employee(String name, float salary) {
	super();
	
	this.name = name;
	this.salary = salary;
}
public int getId() {
	return id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}

public float getSalary() {
	return salary;
}
public void setSalary(float salary) {
	this.salary = salary;
}

}
