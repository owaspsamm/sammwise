var tosend = {
  name: "Details",
  elements: [{
    
      "type": "text",
      "name": "Company Name",
     },
     {
      "type": "text",
      "name": "Project name"
     },
     {
      "type": "text",
      "name": "Description of Project"
     }
    ],
    "description": "These are optional, the only use for these will be to help categorize the results you receive, eg: title of results document ETC "

}




const detailsJSON = () => {
    return ( 
    tosend
     );
}
 
export default detailsJSON