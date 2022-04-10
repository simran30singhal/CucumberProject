package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Login_Steps {
	
	WebDriver driver=BaseClass.driver;
	
	@Given("User has opened the application in the browser")
	public void user_has_opened_the_application_in_the_browser() throws InterruptedException {
	    
		driver.get("https://www.simplilearn.com");
		Thread.sleep(3000);
	}

	@When("User clicks on the Login link")
	public void user_clicks_on_the_login_link() {
	   
		WebElement LoginLink= driver.findElement(By.className("login"));
		LoginLink.click();
	}

	@When("User enter emailid and password")
	public void user_enter_emailid_and_password() {
	    
		WebElement UserName= driver.findElement(By.name("user_login"));
		WebElement Password=driver.findElement(By.id("password"));
		
		UserName.sendKeys("abc@xyz.com");
		Password.sendKeys("Abc@1234");
	}

	@When("User cicks on Login button")
	public void user_cicks_on_login_button() {
	    
		WebElement LogBtn=driver.findElement(By.name("btn_login"));
		LogBtn.click();
	}

	@Then("User should land on the homepage")
	public void user_should_land_on_the_homepage() {
	    
		System.out.println("Inside HomePage");
	}

	@When("User enter emailid {string} and password {string}")
	public void user_enter_emailid_and_password(String username, String password) {
	   
		WebElement UserName= driver.findElement(By.name("user_login"));
		WebElement Password=driver.findElement(By.id("password"));
		
		UserName.sendKeys(username);
		Password.sendKeys(password);
	}
	
	@Then("User gets the error message as {string}")
	public void user_gets_the_error_message_as(String ExpMsg) {
	    
		WebElement ErrorMsg = driver.findElement(By.xpath("//div[@class='error_msg']"));
		String ActualMsg = ErrorMsg.getText();
		Assert.assertEquals(ActualMsg, ExpMsg);
	}
}
