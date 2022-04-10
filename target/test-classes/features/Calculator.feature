Feature: This feature would be to create a calculator for Add and Substract

  Scenario: Add two numbers
    Given User has the calculator
    When User adds 5 and 6
    Then User sees result 11 is displayed

  Scenario: Substract two numbers
    Given User has the calculator
    When User subs 7 and 4
    Then User sees result 3 is displayed

  Scenario Outline: Add two numbers using scenario outline
    Given User has the calculator
    When User adds <num1> and <num2>
    Then User sees result <res> is displayed

    Examples: 
      | num1 | num2 | res |
      |    2 |    3 |   5 |
      |    5 |   -6 |  -1 |
      |    6 |    8 |  14 |

  Scenario: Add numbers using DataTable
    Given User has the calculator
    When User adds the below numbers
      | 2 |
      | 4 |
      | 8 |
      | 9 |
    Then User sees result 23 is displayed

  Scenario: Add numbers using DataTable
    Given User has the calculator
    When User adds the below numbers using List
      |  2 |
      |  4 |
      |  8 |
      |  9 |
      | 10 |
    Then User sees result 33 is displayed
    
    Scenario: To calculate the total bill of the order
    
    Given User has the calculator
    When User orders the below items
    |coffee|22|
    |tea|10|
    Then User sees result 32 is displayed
    
    Scenario: To calculate the total bill of the order using quantity
    
    Given User has the calculator
    When User orders the below items of quantity
    |coffee|1|20|
    |tea|2|10|
    Then User sees result 40 is displayed
