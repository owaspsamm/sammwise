import secarch from "../surveypanels/designsurvey/secarch"
import secrequirement from "../surveypanels/designsurvey/secrequirement"
import threatassessment from "../surveypanels/designsurvey/threatassessment"


//Skeleton of the Page 
var tosend = {
    name: "Design",
    elements: [{
        //Append later
    }

    ]

}

//Push elements to Skeleton 
tosend.elements.push(threatassessment())
tosend.elements.push(secrequirement())
tosend.elements.push(secarch())



const designJSON = () => {
    return ( 
        tosend
     );
}
 
export default designJSON;