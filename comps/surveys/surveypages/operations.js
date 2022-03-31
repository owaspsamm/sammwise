import envman from "../surveypanels/operations/envman"
import incman from "../surveypanels/operations/incman"
import opman from "../surveypanels/operations/opman"


//Skeleton of the Page 
var tosend = {
    name: "Operations",
    elements: [{
         //Append later
    
    }
    ]

}
//Push elements to Skeleton 
tosend.elements.push(incman())
tosend.elements.push(envman())
tosend.elements.push(opman())

const operationsJSON = () => {
    return ( 
        tosend
     );
}
 
export default operationsJSON;