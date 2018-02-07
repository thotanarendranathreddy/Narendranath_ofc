package spring.loose_coupling;

public class Traveller implements journey {

	private Vehicle v;
	
	
	public void setV(Vehicle v) {
		this.v = v;
	}
	
	
	public void startJourney() {
	System.out.println("journey started");
		v.move();
	}

}
