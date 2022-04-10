package stepDefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Calculator_StepDefinitions {

	int res = 0;

	@Given("User has the calculator")
	public void user_has_the_calculator() {

		System.out.println("Inside Calculator");
	}

	@When("User adds {int} and {int}")
	public void user_adds_and(int num1, int num2) {

		res = num1 + num2;
		System.out.println("Result" + res);
	}

	@Then("User sees result {int} is displayed")
	public void user_sees_result_is_displayed(int num) {

		Assert.assertEquals(num, res);
	}

	@When("User subs {int} and {int}")
	public void user_subs_and(int num1, int num2) {

		res = num1 - num2;
		System.out.println("Result" + res);
	}

	@When("User adds the below numbers")
	public void user_adds_the_below_numbers(DataTable dataTable) {

		int rows = dataTable.height();
		for (int i = 0; i < rows; i++) {

			res = res + Integer.parseInt(dataTable.cell(i, 0));
		}
	}

	@When("User adds the below numbers using List")
	public void user_adds_the_below_numbers_using_list(List<Integer> num) {
		
		for(Integer n:num) {
			
			res=res+n;
		}
	}
	
	@When("User orders the below items")
	public void user_orders_the_below_items(Map<String,Integer> price) {
		
		for(String key: price.keySet()) {
			
			res=res+price.get(key);
		}  
		
	}
	
	@When("User orders the below items of quantity")
	public void user_orders_the_below_items_of_quantity(DataTable dataTable) {
		
		int rows=dataTable.height();
		for(int i=0;i<rows;i++) {
			
			int quantity=Integer.parseInt(dataTable.cell(i, 1));
			int price=Integer.parseInt(dataTable.cell(i, 2));
			res=res+ quantity*price;
	}
	}

}
