@F_Login
Feature: This feature would be used to design the Login page of the application

  Background: Open the application
    Given User has opened the application in the browser

	
  Scenario: Validate the successful login
    When User clicks on the Login link
    And User enter emailid and password
    And User cicks on Login button
    Then User should land on the homepage

	@Regression
  Scenario: Validate the successful login using test data
    When User clicks on the Login link
    And User enter emailid "xyz@abc.com" and password "Abc@1234"
    And User cicks on Login button
    Then User should land on the homepage
	
	@Regression @Rapid
  Scenario Outline: Validate the successful login using multiple set of test data
    When User clicks on the Login link
    And User enter emailid "<emailid>" and password "<password>"
    And User cicks on Login button
    Then User should land on the homepage

    Examples: 
      | emailid        | password |
      | xyz@abc.com    | Abc@1234  |
      | simran@abc.com | Abc@1234  |

  Scenario: Validate the negative login using test data
    When User clicks on the Login link
    And User enter emailid "xyz@abc.com" and password "Abc@1234"
    And User cicks on Login button
    Then User gets the error message as "The email or password you have entered is invalid."
