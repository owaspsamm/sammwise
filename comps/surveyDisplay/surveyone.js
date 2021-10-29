import React,{useCallback, useState,useEffect} from 'react'
import Mysurvey from '../surveyTypes/surveytypeone'
import router, {useRouter} from 'next/router'


// Function to save data to file on local computer 

const SurveyOne = () => {
    const router = useRouter();
    const [showPage, setShowPage] = useState(true);
    
    const onCompletePage = useCallback((data)=>{
        // Uncomment for testing data set
       // data = {"question1":1,"question2":1,"question3":1,"question4":1,"question5":1,"question6":1,"question7":1,"question8":1,"question9":1,"question10":1,"question11":1,"question12":1,"question13":1,"question14":1,"question15":1,"question16":1,"question17":1,"question18":1,"question31":1,"question32":1,"question33":1,"question34":1,"question35":1,"question36":1,"question49":1,"question50":1,"question51":1,"question52":1,"question53":1,"question54":1,"question43":1,"question44":1,"question45":1,"question46":1,"question47":1,"question48":1,"question37":1,"question38":1,"question39":1,"question40":1,"question41":1,"question42":1,"question55":1,"question56":1,"question57":1,"question58":1,"question59":1,"question60":1,"question61":1,"question62":1,"question63":1,"question64":1,"question65":1,"question66":1,"question67":1,"question68":1,"question69":1,"question70":1,"question71":1,"question72":1,"question74":1,"question73":1,"question75":1,"question76":1,"question77":1,"question78":1,"question79":1,"question80":1,"question81":1,"question82":1,"question83":1,"question84":1,"question85":1,"question86":1,"question87":1,"question88":1,"question89":1,"question90":1,"Company Name":"Test Name","Project name":"Test Project Name","Description of Project":"Test Desc"}
        sessionStorage.setItem('dataResults',JSON.stringify(data))
        router.push('/results')
        setShowPage(!showPage)
    },[showPage])
// display the final page

    return ( 
        <div>
            {

               <Mysurvey/>
               
            }
        </div>
    
     );
}
//showCompletedPage ={(data)=>onCompletePage(data)}
export default SurveyOne;
