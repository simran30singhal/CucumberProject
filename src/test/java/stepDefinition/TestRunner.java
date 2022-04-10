package stepDefinition;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin={"html:target/cucumber.html","json:target/cucumber.json"},
		features="src/test/java/features",
				tags = {"@F_Login"},
				//tags= {"@Sanity,@Regression"}, to run multiple tags
						//tags= {"@Rapid and @Regression"}, // to run tags having both @Reg and @Rapid
				glue= {"stepDefinition"}
				)
public class TestRunner {
	
}


/*@CucumberOptions(
        
        features = "src/test/java/features",
        //tags = {"@Sanity"},  to run one single Tag
        
        //tags = {"@Sanity,@Regression"}, //to run multiple tags using OR
        //tags = {"@Sanity or @Regression"}, //to run multiple tags using OR
        
        tags = {"@Regression","@Rapid"}, //to run multiple tags using And
        //tags = {"@Regression and @Rapid"}, //to run multiple tags using And
        
        glue = {"stepDefs"}
        
        )*/