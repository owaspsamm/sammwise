// react imports
import {Radar, Doughnut, Bar} from 'react-chartjs-2';
import { Flex, Box } from 'reflexbox'
import GaugeChart from 'react-gauge-chart'
import React, {useState,useEffect, useRef} from 'react';
import Head from 'next/head'
import ReactToPrint, {PrintContextConsumer} from 'react-to-print';
import {useRouter} from 'next/router'

//local imports
import surveyCalculatorJSON from '../comps/surveyDisplay/calculator';
import DonutGraph from '../comps/surveyDisplay/graphs/donutgraph';
import SpiderGraph from '../comps/surveyDisplay/graphs/spidergraph';
import Bargraph from '../comps/surveyDisplay/graphs/bargraph';
import InputFile from '../comps/inputfile';
import Dataset from '../comps/surveyDisplay/graphs/datasetprops';
import ComponentToPrint from '../comps/ComponentToPrint';
import assessmentCalculator from '../comps/surveyDisplay/graphs/testCalculator';
import SurveyButton from '../comps/buttons/surveybuttons';

var completionText
var dataENV = []
var finalScore = [0,0]
var percentageScore = 0
var projectName 
var projectDesc 
var companyname = "Results"

const donutGraph = new DonutGraph()
const practiceRadar = new SpiderGraph()
const bussFuncRadar = new SpiderGraph()
bussFuncRadar.set_title_text("business function")
practiceRadar.set_title_text("practice")
const totalsBarGraph =  new Bargraph()
const bussFuncBarGraph = new Bargraph()
const practiceBarGraph = new Bargraph()
const additionalDataset = new Dataset()
totalsBarGraph.set_aspect_ratio(3)
bussFuncBarGraph.set_aspect_ratio(1)
practiceBarGraph.set_aspect_ratio(1)
var l = ["No","Yes, for some","Yes, for most","Yes, for all"]
totalsBarGraph.set_labels(l)



var graphObjects = {
    'donut_graph':donutGraph,
    'practiceRadar': practiceRadar,
    'practiceBar': practiceBarGraph,
    'bussFuncRadar': bussFuncRadar,
    'bussFuncBar': bussFuncBarGraph, 
    'totalsbar': totalsBarGraph
}

//function to save file to local computer
function saveText(text, filename){
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click()
}



const results = () => {

    
    
    const[display,setDisplay] = useState(0)
    const[showPrevious, setShowPrevious] = useState(false)
    const componentRef = useRef();
    const reducer = (prevValue, currValue) => prevValue + currValue;   
    function reloadPage(){
        location.reload();
    }

        useEffect( () => {
            
            const sessionData = sessionStorage.getItem('dataResults');
            const previousData = sessionStorage.getItem('prevResults');
            const assessmentSessionStateData = JSON.parse(sessionStorage.getItem('assessmentState'));
            
            
            var answer_values = []
            // fill values array 
            for (const key in assessmentSessionStateData){
                answer_values.push(assessmentSessionStateData[key]);
            }
            var answer_sum = answer_values.reduce(reducer);
            var userStateUpdate = JSON.parse(sessionStorage.getItem('userState'));
            userStateUpdate['page'] = 'resultsPage';
            userStateUpdate['has_switched_page'] = true;
            sessionStorage.setItem('userState', JSON.stringify(userStateUpdate));
            
         
            if (assessmentSessionStateData){
                dataENV[0] = assessmentSessionStateData;
                
                // if(assessmentSessionStateData && !(previousData && dataENV[0])){
                //     dataENV[0] = assessmentSessionStateData;
                // }
                if(previousData) {
                    setShowPrevious(true);
                    dataENV[1] = JSON.parse(previousData);
                    if(bussFuncBarGraph.metaData.datasets.length < 2){
                        totalsBarGraph.metaData.datasets.push(new Dataset().metaData);
                        bussFuncBarGraph.metaData.datasets.push(new Dataset().metaData);
                        practiceBarGraph.metaData.datasets.push(new Dataset().metaData);
                        console.log('prev data uploaded')
                    }
                    
                   // console.log("additional datasets added")
                }
                completionText = 'Thank you for completing the questionnaire'   
                
                // put all relevant data in to the JSON for the Charts
                // surveyCalculator JSON returns the sorted scores from the survey where Pages
                // are business functions and Panels are the sub categories
                // if(!display){
                    // Only push to graph if survey values have any inputs 
            
                // if(answer_values.reduce(reducer) > 0){
                    for(let dataNum = 0; dataNum < dataENV.length;dataNum++){
                       
                        
                        // var calcResultsJSON = surveyCalculatorJSON(dataENV[dataNum])
                        var testCalc = new assessmentCalculator(dataENV[dataNum]);
                        testCalc.computeResults();
                        
                        // console.log(calcResultsJSON);
                        var totalsBarGraphData = [0,0,0,0]
                        
                        console.log(testCalc.businessFunctionNames);
                        console.log(testCalc.businessFunctionScores);
                        // console.log(testCalc.practiceNames);
                        // console.log(testCalc.practiceScores, 'len',testCalc.practiceScores.length);
                        console.log(testCalc.responseCount);
                        // bussFuncRadar.reset_data();
                        // bussFuncBarGraph.resetData();
                        // practiceRadar.reset_data();
                        // practiceBarGraph.resetData();
                        // totalsBarGraph.resetData();
                        bussFuncRadar.metaData.labels = testCalc.businessFunctionNames;
                        bussFuncBarGraph.metaData.labels = testCalc.businessFunctionNames;
                        
                        bussFuncRadar.metaData.datasets[dataNum].data = testCalc.businessFunctionScores;
                        bussFuncBarGraph.metaData.datasets[dataNum].data = testCalc.businessFunctionScores;
                        
                        
                        practiceRadar.metaData.labels = testCalc.practiceNames;
                        practiceBarGraph.metaData.labels = testCalc.practiceNames;
                        practiceRadar.metaData.datasets[dataNum].data = testCalc.practiceScores;
                        practiceBarGraph.metaData.datasets[dataNum].data = testCalc.practiceScores;

                        // for (let i = 0; i < 5; i++) {
                           
                        //     if(bussFuncBarGraph.metaData.labels.length<5){
                        //         bussFuncRadar.metaData.labels.push(calcResultsJSON.Pages[i].name)
                        //         bussFuncBarGraph.metaData.labels.push(calcResultsJSON.Pages[i].name)
                        //         bussFuncRadar.metaData.datasets[dataNum].data.push(calcResultsJSON.Pages[i].score)
                        //         bussFuncBarGraph.metaData.datasets[dataNum].data.push(calcResultsJSON.Pages[i].score)
                                
                           
                        //     }else{
                        //         bussFuncRadar.metaData.datasets[dataNum].data[i] = calcResultsJSON.Pages[i].score
                        //         bussFuncBarGraph.metaData.datasets[dataNum].data[i] = calcResultsJSON.Pages[i].score
                        //     }
                        // }
                        //     for (let j = 0; j < 3; j++) {
                        //         if (practiceBarGraph.metaData.labels.length<15)
                        //         { 
                                    
                        //             practiceRadar.metaData.labels.push(calcResultsJSON.Pages[i].panels[j].name)
                        //             practiceBarGraph.metaData.labels.push(calcResultsJSON.Pages[i].panels[j].name)
                        //             practiceRadar.metaData.datasets[dataNum].data.push(calcResultsJSON.Pages[i].panels[j].score)
                        //             practiceBarGraph.metaData.datasets[dataNum].data.push(calcResultsJSON.Pages[i].panels[j].score) 
                                    
                                    
                        //         }
                        //         // else{
                        //         //     practiceRadar.metaData.datasets[0].data[i]= calcResultsJSON.Pages[i].panels[j].score
                        //         //     practiceBarGraph.metaData.datasets[0].data[i]= calcResultsJSON.Pages[i].panels[j].score
                        //         // }
                        //         // if(dataNum==1){
                        //         //     practiceRadar.metaData.datasets[1].data.push(calcResultsJSON.Pages[i].panels[j].score)
                        //         //     practiceBarGraph.metaData.datasets[1].data.push(calcResultsJSON.Pages[i].panels[j].score) 
                        //         // }   
                                
                        //         // console.log("This is the array in 2: "+  bussFuncBarGraph.metaData.datasets[dataNum].data)
                        //         //Applying each score the array 
                            
                        //         for(let g = 0; g<6;g++){
                        //             if(calcResultsJSON.Pages[i].panels[j].answers[g] == 0){
                        //                 totalsBarGraphData[0]++
                        //             }
                        //             if(calcResultsJSON.Pages[i].panels[j].answers[g] == 0.25){
                        //                 totalsBarGraphData[1]++
                        //             }
                        //             if(calcResultsJSON.Pages[i].panels[j].answers[g] == 0.5){
                        //                 totalsBarGraphData[2]++
                        //             }
                        //             if(calcResultsJSON.Pages[i].panels[j].answers[g] == 1){
                        //                 totalsBarGraphData[3]++
                        //             }
                        //         }
                            
                        //     } 
                        // }


                        totalsBarGraphData[0] = testCalc.responseCount["No"]
                        totalsBarGraphData[1] = testCalc.responseCount["Yes, for some"]
                        totalsBarGraphData[2] = testCalc.responseCount["Yes, for most"]
                        totalsBarGraphData[3] = testCalc.responseCount["Yes, for all"]
                        console.log(testCalc.responseCount);
                        var totalsCount = [ testCalc.responseCount["No"],testCalc.responseCount["Yes, for some"], testCalc.responseCount["Yes, for most"], testCalc.responseCount["Yes, for all"]];

                        
                        totalsBarGraph.metaData.datasets[dataNum].data = []
                        totalsBarGraph.metaData.datasets[dataNum].data = totalsCount;
                        
                        //Pushing to the Graph
                           
                        for (let index = 0; index < totalsBarGraphData.length; index++) {
                            donutGraph.update_properties_dataset(index)
                            //  if(answer_sum > 0){
                            //      console.log('totals graph data gets data'); 
                                // totalsBarGraph.metaData.datasets[dataNum].data.push(totalsBarGraphData[index])
                            //  }
                        }
                        finalScore[dataNum]= testCalc.overallScore.toFixed(2);
                        
                        percentageScore = (finalScore[dataNum] /3).toFixed(2);
                        console.log(percentageScore)
                        
                        //if(totalsBarGraph.metaData.datasets[0].data[0] > 0 && answer_sum == 0){
                      //      totalsBarGraph.metaData.datasets[0].data[0] = 0;
                      //  }
                        
                        console.log(finalScore[dataNum])
                        console.log(finalScore);
                        companyname = dataENV[dataNum]['Company Name']
                        completionText+=" "+ companyname
                        projectName = dataENV[dataNum]["Project name"]
                        projectDesc = dataENV[dataNum]["Description of Project"]
                    // }
                }
                setDisplay(1)
            } 
        else{
                
                completionText = 'You must first complete the questionnaire to see results'
            }
        }, [])
            
                           
           return(
            <>
                <Head>
                    <title>SAMMWise | Results </title>
                    <meta name = "keywords" content = "owassp-calc"/>
                </Head>
                <h1>{completionText}</h1>
                <h1>{projectName}</h1>
                <p>{projectDesc}</p>
                <div ref={componentRef}>
                    <div>
                        <SurveyButton name="Refresh Graphs" onClick={()=> reloadPage()} />
                    </div>
                    <div label='TOTALS' id="totalsDiv">
                        <Flex flexWrap = 'wrap'>
                            <Box width ={[1]} p = {3} id="box1" className="totalGraphs">
                                {/* <h2 id="finalscore">{showPrevious? 'Your overall score is: '+ finalScore[0] + ' Your score last time was: ' +finalScore[1]:'Your overall score is: '+ finalScore[0]}</h2>
                                <GaugeChart id="gauge-chart2" nrOfLevels={4}   textColor ={"#000000"} colors={[" #ff6384","#ff9f40","#ffcd56","#4bc0c0"]} className="gauge"/> */}
                                <h2 id="finalscore">{showPrevious? 'Your overall score is: '+ finalScore[0]+'/3' + ' Your score last time was: ' +finalScore[1] +'/3':'Your overall score is: '+ finalScore[0] +'/3'}</h2>
                                <GaugeChart id="gauge-chart2" nrOfLevels={4}  percent={percentageScore} textColor ={"#000000"} colors={[" #ff6384","#ff9f40","#ffcd56","#4bc0c0"]} className="gauge"/>
                                <h2 id="totalsbargraph" className="totalsBarHeader"> Response count by value </h2>
                                <Bar data = {totalsBarGraph.metaData} options = {totalsBarGraph.layout_props} className='totalsBar' />
                            </Box> 
                        </Flex>
                    </div>
                    <div label='Business Functions'>
                        <Flex flexWrap = 'wrap'>
                            <Box width ={[1,1/2]} p = {3} className="bussFuncRadarBox" >
                                <h2 id = "busfuncradargraph"> Maturity by Business Function </h2>
                                <Radar data = {bussFuncRadar.metaData}  options = {bussFuncRadar.layout_props} className='bussFuncRadar'/>
                            </Box>
                            <Box width ={[1,1/2]} p = {3} className="bussFuncBarBox">
                                <h2> Maturity by Business Function </h2>
                                <Bar data = {bussFuncBarGraph.metaData} options = {bussFuncBarGraph.layout_props} className='bussFuncBar'/>
                            </Box>                  
                        </Flex>
                    </div>
                    <div label='Practices' className="practices">
                        <Flex flexWrap = 'wrap'>
                            <Box width ={[1,1/2]} p = {3} className="practiceRadarBox">
                                <h2 id = "pracradargraph"> Maturity by Practice </h2>
                                <Radar  data = {practiceRadar.metaData}  options = {practiceRadar.layout_props} className='practiceRadar'/>
                            </Box>
                            <Box width ={[1,1/2]} p = {3} className="practicesBarBox">
                                <h2 id ="pracbargraph"> Maturity by Practice </h2>
                                <Bar data = {practiceBarGraph.metaData} options = {practiceBarGraph.layout_props} className='practiceBar'/>
                            </Box>
                        </Flex> 
                    </div>
                </div>
                    <div className="jsonDownload">     
                        <h2 className="jsonDownload">Do you wish to save your results file in JSON?</h2>
                        <button className = 'btn'
                            onClick={()=> saveText(JSON.stringify(dataENV[0]), JSON.stringify(companyname)+JSON.stringify(projectName)+".json")}>
                                Save file
                        </button>
                        <h2 className="jsonDownload">Do you wish to load your previous results to compare?</h2>
                        <InputFile fileName = 'prevResults' className="jsonDownload"/>
                    </div>
                
                {/* <ComponentToPrint completionText = {completionText} projectName = {projectName} projectDesc = {projectDesc} finalScore = {finalScore} graphObjects={graphObjects}/> */}
            
            <div>
                <h2 className='jsonDownload'> Do you wish to print or save the graphs as a pdf?</h2>
                    <ReactToPrint 
                    trigger={() => <button className='btn'>Export graphs</button>}
                    content={()=>  componentRef.current}
                    />
            </div>
            
            
            </>
        );
}
 
export default results;