
//JSON skeleton to be sent to the Display


var allAnswersJSON = {
    name:"Final Score",
    companyname:"",
    projectname:"",
    description:"",
    score:0,
    Pages:[
        {
            name:"Governance",
            score:0,
            panels:[
                {
                    name:"Strategy and Metrics",
                    answers:[],
                    score:0
                },
                {
                    name:"Policy and Compliance",
                    answers:[],
                    score:0
                },
                {
                    name:"Education and Guidance",
                    answers:[],
                    score:0
                }
            ]
        },
        {
            name:"Design",
            score:0,
            panels:[
                {
                    name:"Security Architecture",
                    answers:[],
                    score:0
                },
                {
                    name: "Security Requirements",
                    answers:[],
                    score:0
                },
                {
                    name:"Threat Assessment",
                    answers:[],
                    score:0
                }
            ]
        },
        {
            name:"Implementation",
            score:0,
            panels:[
                {
                    name:"Defect Management",
                    answers:[],
                    score:0
                },
                {
                    name:"Secure Build",
                    answers:[],
                    score:0
                },
                {
                    name:"Secure Deployment",
                    answers:[],
                    score:0
                }
            ]
        },
        {
            name:"Verification",
            score:0,
            panels:[
                {
                    name:"Architecture Assessment",
                    answers:[],
                    score:0
                },
                {
                    name:"Requirements Testing",
                    answers:[],
                    score:0
                },
                {
                    name:"Security Testing",
                    answers:[],
                    score:0
                }
            ]
        },
        {
            name:"Operations",
            score:0,
            panels:[
                {
                    name:"Environment Management",
                    answers:[],
                    score:0
                },
                {
                    name:"Incident Management",
                    answers:[],
                    score:0
                },
                {
                    name:"Operations Management",
                    answers:[],
                    score:0
                }
            ]
        }
    ]
}

function clearResults(){

    allAnswersJSON.score = 0;

    for(let i=0;i<allAnswersJSON.Pages.length; i++){

        allAnswersJSON.Pages[i].score = 0;

        for (let j = 0; j < allAnswersJSON.Pages[i].panels.length; j++){


            allAnswersJSON.Pages[i].panels[j].score = 0;

            allAnswersJSON.Pages[i].panels[j].answers = [];

        }

    }

}

// takes an JSON input of all the quesions and their relative answers
// Outputs a formatted Json of all answers under their sub headings 



function sortResults (data){
    var count =0
    var stringcount =0
    var pagesCount = 0
    var panelsCount = 0
    var panelTotal = 0
    var pagesTotal = 0
    var finalTotal = 0
    var lvlOne =0 
    var lvlTwo =0
    var lvlThree = 0
    var count90 = 0
    


    // FOR TESTING 

   // data = {"question1":1,"question2":1,"question3":1,"question4":1,"question5":1,"question6":1,"question7":0,"question8":0,"question9":0,"question10":0,"question11":0,"question12":0,"question13":0.25,"question14":0.25,"question15":0.25,"question16":0.25,"question17":0.25,"question18":0.25,"question19":0.5,"question20":0.5,"question21":0.5,"question22":0.5,"question23":0.5,"question24":0.5,"question25":1,"question26":1,"question27":1,"question28":1,"question29":1,"question30":1,"question31":0,"question32":0,"question33":0,"question34":0,"question35":0,"question36":0,"question37":0.25,"question38":0.25,"question39":0.25,"question40":0.25,"question41":0.25,"question42":0.25,"question43":0.5,"question44":0.5,"question45":0.5,"question46":0.5,"question47":0.5,"question48":0.5,"question49":1,"question50":1,"question51":1,"question52":1,"question53":1,"question54":1,"question55":0,"question56":0,"question57":0,"question58":0,"question59":0,"question60":0,"question61":0.25,"question62":0.25,"question63":0.25,"question64":0.25,"question65":0.25,"question66":0.25,"question67":0.5,"question68":0.5,"question69":0.5,"question70":0.5,"question71":0.5,"question72":0.5,"question73":1,"question74":1,"question75":1,"question76":1,"question77":1,"question78":1,"question79":0,"question80":0,"question81":0,"question82":0,"question83":0,"question84":0,"question85":0.25,"question86":0.25,"question87":0.25,"question88":0.25,"question89":0.25,"question90":0.25}
    //there are 5 pages each page has 3 panels and each panel has 6 questions 
    // 5 pages
    // 15 panels
    // 45 streams 
    // 90 questions
    
    for (const key in data) {
       
         
            
            //push answer from question to the question element in the allAnswersJSON 

            // The 1st relates to the 4th question of the panel set, therefore 2nd and 5th 3rd and 6th aswell
            // the average of the relative questions is the score for that set eg: (1st and 4th / 2) 
            // the answers to each stream is added and that is the score for the panel eg : panel score = (1st and 4th)/2 + (2nd and 5th)/2 + (3rd and 6th)/2
            count++
            count90++
            if(stringcount == 2){
                allAnswersJSON.description = data[key]
                stringcount++
            }
            if(stringcount ==1){
                allAnswersJSON.projectname = data[key]
                stringcount++
            }

            if(count90 == 91 && !stringcount){
                allAnswersJSON.companyname = data[key]
                stringcount++
              
            }

            
            allAnswersJSON.Pages[pagesCount].panels[panelsCount].answers.push(data[key])

            // sort each question 
            if (count == 1 || count == 4){
                lvlOne+=parseFloat(data[key])
            }
            if(count == 2 || count == 5){
                lvlTwo+= parseFloat(data[key])
            }
            if (count == 3 || count == 6){
                lvlThree+=parseFloat(data[key])
            }
            
            // if its the last question set do everything and total 
            if(pagesCount==4 && panelsCount ==2 && count == 6){
                panelTotal = (lvlOne/2)+(lvlTwo/2)+(lvlThree/2)
            

                allAnswersJSON.Pages[pagesCount].panels[panelsCount].score = panelTotal
                pagesTotal+=panelTotal
                panelTotal = 0
                panelsCount++
                count = 0

                allAnswersJSON.Pages[pagesCount].score = pagesTotal/3
                finalTotal+= pagesTotal/3
                pagesTotal = 0
            
                panelsCount = 0

                lvlOne =0
                lvlTwo = 0
                lvlThree =0

                allAnswersJSON.score = finalTotal/5
            }

            //last question of the business functions
            else if (panelsCount ==2 && count == 6){
                panelTotal = (lvlOne/2)+(lvlTwo/2)+(lvlThree/2)

                allAnswersJSON.Pages[pagesCount].panels[panelsCount].score = panelTotal
                pagesTotal+=panelTotal
                panelTotal = 0
                panelsCount++
                count = 0

                allAnswersJSON.Pages[pagesCount].score = pagesTotal/3
                finalTotal+= pagesTotal/3
                pagesTotal = 0
                pagesCount++
                panelsCount = 0
                lvlOne =0
                lvlTwo = 0
                lvlThree =0
                
            }
            // last question of each sub category
            else if(count==6){


                panelTotal = (lvlOne/2)+(lvlTwo/2)+(lvlThree/2)
                allAnswersJSON.Pages[pagesCount].panels[panelsCount].score = panelTotal
                pagesTotal+=panelTotal
                panelTotal = 0
                panelsCount++
                count = 0

                lvlOne =0
                lvlTwo = 0
                lvlThree =0
            }
            
        }
    }

const surveyCalculatorJSON = (result) => {
    sortResults(result)
    return (allAnswersJSON);
}
 
export default surveyCalculatorJSON;