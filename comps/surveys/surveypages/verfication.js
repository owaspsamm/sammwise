import archass from "../surveypanels/verification/archass"
import reqtest from "../surveypanels/verification/reqtest"
import sectest from "../surveypanels/verification/sectest"


//Skeleton of the Page 
var tosend = {
    name: "Verification",
    elements: [{

         //Append later
    }
    ]
}
//Push elements to Skeleton 
tosend.elements.push(archass())
tosend.elements.push(reqtest())
tosend.elements.push(sectest())

const verificationJSON = () => {
    return ( 
        tosend
    );
}
 
export default verificationJSON;