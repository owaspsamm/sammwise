import designJSON from "./surveypages/design"
import detailsJSON from "./surveypages/details"
import governanceJSON from "./surveypages/governance"
import implementationJSON from "./surveypages/implementation"
import operationsJSON from "./surveypages/operations"
import verificationJSON from "./surveypages/verfication"



//create skeleton for Json to be appended later
     var tosend =  {
    
            pages: [{
            
            }
             
             //appended later
            ],
            
            
            startSurveyText: "Start Survey",
            questionStartIndex: "1"
        }
    //appending to the pages category
        tosend.pages.push(governanceJSON())
        tosend.pages.push(designJSON())
        tosend.pages.push(implementationJSON())
        tosend.pages.push(verificationJSON())
        tosend.pages.push(operationsJSON())
        tosend.pages.push(detailsJSON())



 const Json = () => {
    return(
       tosend
    )
}; 
export default Json;