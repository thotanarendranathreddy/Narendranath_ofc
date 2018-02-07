package spring.loose_coupling;

public class Bike implements Vehicle {

	
	private String fuelType;
	private int maxSpeed;
	
	
	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}
	public void setMaxSpeed(int maxSpeed) {
		this.maxSpeed = maxSpeed;
	}
	@Override
	public void move() {
		System.out.println("Fuel Type:"+fuelType);
		System.out.println("maxSpeed:"+maxSpeed);
		System.out.println("Bike is Strated");
		
	}
}
