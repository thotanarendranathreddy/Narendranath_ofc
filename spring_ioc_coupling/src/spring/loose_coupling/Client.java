package spring.loose_coupling;
import org.springframework.core.io.*;
import org.springframework.beans.factory.*;
import org.springframework.beans.factory.xml.*;
public class Client {

	public static void main(String[] args) {
		
		
		Resource res=new ClassPathResource("config1.xml");
		BeanFactory factory=new XmlBeanFactory(res);

		Resource res1=new ClassPathResource("config2.xml");
		BeanFactory factory1=new XmlBeanFactory(res1,factory);

		Object o=factory1.getBean("id3");
		journey j=(journey)o;
		j.startJourney();

	
	}

}
