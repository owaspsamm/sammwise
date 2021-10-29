import educationJSON from "../surveypanels/governance/education"
import policyJSON from "../surveypanels/governance/policy"
import strategyJSON from "../surveypanels/governance/strategy"

//Skeleton of the Page 
var tosend =  {
    name: "Governance",
    elements: [{
         //Append later
    }

    ],
}

//Push elements to Skeleton 
tosend.elements.push(strategyJSON())
tosend.elements.push(policyJSON())
tosend.elements.push(educationJSON())

const governanceJSON = () => {
    return ( 
       
        tosend

     );
}
 
export default governanceJSON;