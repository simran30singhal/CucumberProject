$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature would be used to design the Login page of the application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@F_Login"
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the application in the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.user_has_opened_the_application_in_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F_Login"
    }
  ]
});
formatter.step({
  "name": "User clicks on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.user_clicks_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter emailid and password",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_enter_emailid_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_cicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_should_land_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the application in the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.user_has_opened_the_application_in_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F_Login"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User clicks on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.user_clicks_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter emailid \"xyz@abc.com\" and password \"Abc@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_enter_emailid_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_cicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_should_land_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the successful login using multiple set of test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "User clicks on the Login link",
  "keyword": "When "
});
formatter.step({
  "name": "User enter emailid \"\u003cemailid\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User cicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should land on the homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailid",
        "password"
      ]
    },
    {
      "cells": [
        "xyz@abc.com",
        "Abc@1234"
      ]
    },
    {
      "cells": [
        "simran@abc.com",
        "Abc@1234"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the application in the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.user_has_opened_the_application_in_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using multiple set of test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F_Login"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "User clicks on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.user_clicks_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter emailid \"xyz@abc.com\" and password \"Abc@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_enter_emailid_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_cicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_should_land_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the application in the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.user_has_opened_the_application_in_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using multiple set of test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F_Login"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "User clicks on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.user_clicks_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter emailid \"simran@abc.com\" and password \"Abc@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_enter_emailid_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_cicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_should_land_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the application in the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.user_has_opened_the_application_in_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the negative login using test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F_Login"
    }
  ]
});
formatter.step({
  "name": "User clicks on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.user_clicks_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter emailid \"xyz@abc.com\" and password \"Abc@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_enter_emailid_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.user_cicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.user_gets_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});