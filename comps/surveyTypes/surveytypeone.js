//All the survey logic in this page 

//TODO: make the panels buttons part of an outside function

import React, {useState, useEffect, useRef} from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import { Flex, Box } from 'reflexbox'
import assert, { strictEqual } from 'assert';
//local imports
import Json from  '../surveys/totalsurvey';
import InputFile from '../inputfile';
import SurveyNav from '../surveynav';
import DropButton from '../buttons/dropdownbutton';
import SurveyButton from '../buttons/surveybuttons';
import router, {useRouter} from 'next/router'
import question_desc from '../surveys/question_desc';

// import saveText from '../saveResponses';


const survey = new Survey.Model(Json());
var isDropDownButtonClicked = false;

function formatDate(date) {
    let month = ''+(date.getMonth() + 1),
    day = '' + date.getDate(),
    year = date.getFullYear(),
    hours = '' +date.getHours(),
    minutes = '' +date.getMinutes(),
    seconds = '' +date.getSeconds();
    if  (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    if (hours.length < 2) {
      hours = '0' + hours;
    }
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
  
    return [year, month, day,hours,minutes,seconds].join('');
  }


const Mysurvey = (prop) => {
    
    const [surveyState,setSurvey] = useState(survey);
    const router = useRouter();
    const [display, setDisplay] = useState(false);
    const [populateState,setPopulateState] = useState(false);
    const [pageState, setPageState] = useState("Governance"); 
    const [dropDownState, setDropDownState] = useState(false);
    const [isDetailsPage, setDetailsPage] = useState(false);
    const [reloadSurvey, setReloadSurvey] = useState(false);
    
    //Use Effect for populating the Survey with predefined answerd from a file or from previously answered survey
    useEffect(() => {
        
        var loadedResults = JSON.parse(sessionStorage.getItem('loadedResults'));
        var assessmentState = JSON.parse(sessionStorage.getItem('assessmentState'))
        var userState = JSON.parse(sessionStorage.getItem('userState'));
        userState['page'] = 'assessmentPage';
        userState['has_switched_page'] = false;

        if(loadedResults){
            sessionStorage.setItem('assessmentState', JSON.stringify(loadedResults));

            for (const key in loadedResults) {   
                    if(key.includes("question") && (loadedResults[key] == 0 || 0.25 || 0.5 || 1 )){
                        assessmentState[key] = loadedResults[key]
                        survey.setValue(key,loadedResults[key])
                    }else if(typeof(key == 'string')){
                        assessmentState[key] = loadedResults[key]
                        survey.setValue(key,loadedResults[key])
                    }
            }
            sessionStorage.removeItem('loadedResults')
        }
        if(assessmentState){ 
            for (const key in assessmentState) {   
                survey.setValue(key,assessmentState[key])
            }    
        }
        
        var navbar = sessionStorage.getItem('navbarState');
        
        
        if(pageState != navbar){
            changePage(navbar);
        }
        
        var userStateData = JSON.parse(sessionStorage.getItem('userState'));
        if(navbar == "Details"){
            setDetailsPage(true);
        }

        if (isChangedPage(userStateData['page'])){
            userStateData['page'] = 'assessmentPage';
            userStateData['has_switched_page'] = false;
            sessionStorage.setItem('userState', JSON.stringify(userStateData));
        } 
        
        setSurvey(survey);
    }, [display])



    function saveResponses(){
        var a = document.createElement('a');
        var data = JSON.parse(sessionStorage.getItem('assessmentState'));
        a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(JSON.stringify(data)));
        var ts = formatDate(new Date());
        console.log(data);
        if (data['Company Name'] != null && data['Company Name'] != "") {
            if (data['Project name'] != null && data['Project name'] != "") {
                var fileName = data['Company Name'] + '-' + data['Project name'] + '-'+ts+'.json';
            } else {
            var fileName = data['Company Name'] + '-'+ts+'.json';
            }
        } else {
            var fileName = "SAMMAssessmentResponses-"+ts+".json";
        }
        a.setAttribute('download', fileName);
        a.click()
    } 

   
    //Handling LoadResults dropDown button functions 
    function handleDropDownButton(value){
        setDropDownState(value);
        isDropDownButtonClicked = true;
    }
    
    

    function setNavBarState(name){
        var userNavbarState = sessionStorage.getItem('navbarState');
        userNavbarState = name;
        sessionStorage.setItem('navbarState', userNavbarState);
        setPageState(name);
        survey.currentPage = name;
        setSurvey(survey);
    }

    // Function that changes page and sets the state of buttons on the navbar
    function changePage(pageName){
        
        if(pageName != "next"){
            survey.currentPage = pageName
        }
        else{
           
                if(survey.currentPageNo == 0){
                    pageName = "Design";
                    
                }
                else if(survey.currentPageNo == 1){
                    pageName = "Implementation";
                }
                else if(survey.currentPageNo == 2){
                    pageName = "Verification";
                    
                }
                else if(survey.currentPageNo == 3){  
                    pageName = "Operations";

                }
                else if(survey.currentPageNo == 4){
                    
                    
                    pageName = "Details";
                    setDetailsPage(true)
                    
                }else if(survey.currentPageNo == 5){
                    
                    // setSurvey(survey);
                    // setDisplay(!display);
                    pageName = "Details";
                    setDetailsPage(true)
                    router.push('/results');
                    // survey.completeLastPage();
                    
                }else{
                    setDetailsPage(true);
                }
            survey.currentPage = pageName; 
        }
        if(pageName == "Details"){
            setDetailsPage(true)
        } else{
            setDetailsPage(false)
        }
        setPageState(pageName);
        var navBarState = sessionStorage.getItem('navbarState');
        navBarState = pageName;
        sessionStorage.setItem('navbarState', navBarState);
        setSurvey(survey);
        
    }

    var pageChanged = false;
    var panels= [];
    var curr_panel_names = [];
    var panelStateMap = new Map()
    var all_pages = survey.pages;
    var page_names = [];
    

    for(let i = 0; i < all_pages.length; i++){
        page_names.push(all_pages[i].name)

    }
    var currPageIndex = 1 // Initialise at one because of "page1"

    //Reloads arrays with page panel data
    function append_panel_data(in_data){
        for(let i = 0; i < in_data.length;i++){
            curr_panel_names.push(in_data[i].name);
            panels.push(in_data[i]);
        }
    }


    //FirstPage doesn't count as changed page so set to false
    survey.showNavigationButtons = "none";
    

    survey.onCurrentPageChanged.add(function(survey, option){
        if (panels.length > 0 && curr_panel_names.length > 0){
            panels.length= 0;
            curr_panel_names.length = 0;
            panelStateMap.clear();
        }
        pageChanged = true;
        var currPage = option.newCurrentPage;
        
        append_panel_data(currPage.getPanels());
       // currPageIndex = page_names.indexOf(currPage.name);
      
    });
    
    var page;
    if(!(pageChanged)){
        page = survey.currentPage;
        append_panel_data(page.getPanels())
    }
    
    function getPanelHeaders(panelName){
        var panelHeaderMap = JSON.parse(sessionStorage.getItem('practiceHeaders'));
        return panelHeaderMap[panelName];
    }

    survey.onAfterRenderPanel.add(function(survey, options){
        var rendered_panel = options.panel.name;
        
        var index = curr_panel_names.indexOf(rendered_panel);
        var firstRender = false;
        var currentPanel = panels[index];
        var curr_page_no = survey.currentPageNo + 1;
        if (curr_page_no < all_pages.length){
            var nextPageName = all_pages[curr_page_no + 1].name;  
        }

        function panelInPage(checkPanel){
            if(curr_panel_names.indexOf(checkPanel) > -1){
                return true;
            }
        }

        function panelScroll(targetPanelName){
            var hTags = document.getElementsByTagName("h4");
            
            var found;

            for(var i=0; i < hTags.length; i++){
                if (hTags[i].textContent == targetPanelName){
                    found = hTags[i];
                    break;
                }
            }
            
            found.scrollIntoView({
                behavior: "smooth"
            });
        }

        function isFirstPanel(index){
            if (index == 0){
                return true;
            } else{
                return false;
            }
        }

        function isLastPanel(index){
            if (index == 2){
                return true;
            } else {
                return false;
            }
        }

        function createPanelButton(button_type, btnID){
            var btn = document.createElement('button');
            btn.type = "button";
            btn.className = "btn btn-info btn-xs";
            btn.id = btnID;
            btn.innerHTML = button_type;
            // Insert buttons into html document   
            var header = options.htmlElement.querySelector("h4");
            // if (!header)
            header = options.htmlElement;
            var span = document.createElement("span");
            span.id = rendered_panel+"panel";
            span.class = 'span';
            span.innerHTML = "  ";
            header.appendChild(span);
            header.appendChild(btn);
            return btn
        }
        
        function deleteButton(btn, btnID){
            btn.remove();
            var span_id = rendered_panel + "panel";
            var span_rem = document.getElementById(span_id)
            span_rem.remove();
        }
        
        // Assert panel is in the current page and isDropDownButtonClicked is not true (i.e., false) 
        if(panelInPage(rendered_panel) && (!isDropDownButtonClicked)){
            var nextID = rendered_panel + "NextNavigator";
            var prevID = rendered_panel + "PrevNavigator";
           
            
            if (currentPanel.isCollapsed == true){
                // initialise panel as a key if not in stateMap
                if (!(panelStateMap.has(rendered_panel))){
                    panelStateMap.set(rendered_panel, false)
                } else{
                    var nbutton = document.getElementById(nextID)
                    if (nbutton != null){
                        deleteButton(nbutton, nextID);
                    }
                    //Only panels 2 and 3 have prevPanel buttons
                    if (!(isFirstPanel(index))){
                        var pbutton = document.getElementById(prevID);
                        if (pbutton != null){
                            pbutton.remove();
                        }
                    }
                }
            } else if(currentPanel.isCollapsed == false){
                // Do not apply scroll animation to first panel when page loads
                if (!(isFirstPanel(index) && !(panelStateMap.has(rendered_panel)))){
                    panelScroll(rendered_panel);
                } 
            
                // Check if button exists before appending. Only next button checked because it applies to all panels.
                if(document.getElementById(nextID) == null){
                    var nextbtnText;
                    
                    if(isLastPanel(index)){
                        nextbtnText = "Next Page";
                    } else{
                        nextbtnText = "Next Practice";
                    }
                    
                    var prevPanel = index - 1;
                    if (!(isFirstPanel(index))){
                        if(document.getElementById(prevID) == null){
                            var prevbtn = createPanelButton("Previous Practice", prevID);
                            prevbtn.onclick = function () {
                                panels[index].collapse();
                                panels[prevPanel].expand();
                                panelScroll(panels[prevPanel].name)
                            }
                        }
                    }
                    var nextPanel = panels[index + 1];
                    
                    // Next Panel button logic -> applied based on panel index. If last panel => go to next page. 
                    if(index < 2){
                        var nextbtn = createPanelButton(nextbtnText, nextID);
                        nextbtn.onclick = function () {
                            nextPanel.expand();
                            currentPanel.collapse();
                            panelScroll(nextPanel.name);
                        }
                    }
                    // } else{
                    //     nextbtn.onclick = function () {
                    //         // nextPage(nextPageName);
                    //         changePage(nextPageName);
                    //     }
                    // }
                    // Set panel "open" state to true 
                    panelStateMap.set(rendered_panel, true)
                }
            }
        }
        if(isLastPanel(index) && isDropDownButtonClicked){
            isDropDownButtonClicked = false
        }
    
    });

    survey.onUpdateQuestionCssClasses.add(function(survey, options) {
        var classes = options.cssClasses
        classes.mainRoot += " sv_qstn";
        classes.root = "sq-root";
        classes.title += " sq-title";
        classes.description ="sq-description";
        classes.item += " sq-item";
        classes.label += " sq-label";
        
    if (options.question.isRequired) {
        classes.title += " sq-title-required";
        classes.root += " sq-root-required";
    }
    if (options.question.getType() === "checkbox") {
        classes.root += " sq-root-cb";
    }
    });

    survey.onValueChanged.add(function(survey, options){
        const assessmentStateData = JSON.parse(sessionStorage.getItem('assessmentState'));
        var question_answered = String(options.name);
        var answer_value = options.value;         
        assessmentStateData[question_answered] = answer_value;
        sessionStorage.setItem('assessmentState', JSON.stringify(assessmentStateData));
    })


    function clearAnswers(){
        let isOK = confirm('This will clear all answers do you wish to continue?')
        
        if (isOK){
            
            const assessmentState = JSON.parse(sessionStorage.getItem('assessmentState'));
            for (const key in assessmentState) {   
                assessmentState[key] = null  
            }    
            
            
            sessionStorage.setItem('assessmentState', JSON.stringify(assessmentState));
        
            if (sessionStorage.getItem('prevResults') != null) {
                sessionStorage.removeItem('prevResults');
            }
        
           // router.reload()
            setDisplay(!display)
        }
      
    }

    
    function isChangedPage(userStateData){
        if (userStateData != 'assessmentPage'){
            return true;
        } else {
            return false
        }
    }

    
// return a page full of the Survey.JS json that was built in the "surveys" Folder 
    return (
        <>
            <h2>Would you like to use previous results to populate the questionnaire?</h2>
            <p>If you have a file of unfinished results that you wish to go back to you can upload them here and the questionnaire will autopopulate with your answers</p>
            <DropButton name = "Load Results" state ={dropDownState} onClick= {value =>handleDropDownButton(value)}/>
                {dropDownState? <InputFile fileName="loadedResults" pageName="assesment"/>:null}

            <div className = "pageNav">
            
                    <SurveyButton name="Clear" boolean ={false} onClick={() => clearAnswers(true)}/>

                    <button className="SaveResponses" onClick={()=> saveResponses()}> Save Responses </button>
                        
            </div>
            
                    
            <SurveyNav button = {pageState} onClick = {value => changePage(value)}/>
            <Survey.Survey  showCompletedPage={false}
                onComplete = {data => prop.showCompletedPage(data.valuesHash)}
                model = {surveyState} 
                />
            
            <div className="pageNav">
                {isDetailsPage?
                    <>
                        <button className="NextPage" onClick={()=> changePage("next")}> Complete </button>
                    </>
                :
                <>
                        <button className="NextPage" onClick={()=> changePage("next")}> Next Page </button>
                </>       
                }
            </div>
        </>
       
    );
}
 
export default Mysurvey;
