export default class assessmentCalculator{
    constructor(answerValues){
        this.answerValues = answerValues;
        this.sammModel = {
            "Governance":{
                "totalScore":0,
                "practices":{
                    "Strategy and Metrics":{
                        "answers": this.getAnswerMap(1),
                        "score":0
                    },
                    "Policy and Compliance":{
                            "answers":this.getAnswerMap(7),
                            "score":0
                        },
                    "Education and Guidance":{
                        "answers":this.getAnswerMap(13),
                        "score":0
                    }
                }
            
            },
            "Design":{
                "totalScore":0,
                "practices":{
                    "Threat Assessment":{
                        "answers": this.getAnswerMap(19),
                        "score":0
                    },
                    "Security Requirements":{
                            "answers":this.getAnswerMap(25),
                            "score":0
                        },
                    "Security Architecture":{
                        "answers":this.getAnswerMap(31),
                        "score":0
                    }
                }
            },
            "Implementation":{
                "totalScore":0,
                "practices":{
                    "Secure Build":{
                        "answers": this.getAnswerMap(37),
                        "score":0
                    },
                    "Secure Deployment":{
                            "answers":this.getAnswerMap(43),
                            "score":0
                        },
                    "Defect Management":{
                        "answers":this.getAnswerMap(49),
                        "score":0
                    }
                }
            },
            "Verification":{
                "totalScore":0,
                "practices":{
                    "Architecture Assessment":{
                        "answers": this.getAnswerMap(55),
                        "score":0
                    },
                    "Requirements Testing":{
                            "answers":this.getAnswerMap(61),
                            "score":0
                        },
                    "Security Testing":{
                        "answers":this.getAnswerMap(67),
                        "score":0
                    }
                }
            },
            "Operations":{
                "totalScore":0,
                "practices":{
                    "Environment Management":{
                            "answers":this.getAnswerMap(73),
                            "score":0
                        },
                    "Incident Management":{
                        "answers": this.getAnswerMap(79),
                        "score":0
                    },
                    "Operations Management":{
                        "answers":this.getAnswerMap(85),
                        "score":0
                    }
                }
            }
        }
        this.overallScore = null;
        this.responseCount = {
            "No":0,
            "Yes, for some":0,
            "Yes, for most": 0,
            "Yes, for all":0}
        this.businessFunctionNames = ["Governance", "Design", "Implementation", "Verification", "Operations"]
        this.practiceNames = []
        this.businessFunctionScores = []
        this.practiceScores = []
    }
    

    getAnswerMap(start){
        // start is the question number in the assessment - this is so it stays consistent with the answerValues data struct
        const answerMap = new Map()
            for(let i =start; i<start+6;i++){
                var key = 'question' + i;
                // answerMap[key] = this.answerValues[key];
                answerMap.set(key, this.answerValues[key]);
            }
        return answerMap;
    }

    
    isPracticeCompleted(values){
        // Checks if value array has null values which means user hasn't completed a practice
        if(values.some(el=>el == null)){
            return false
        } else{
            return true
        }
    }

    sortResponseCount(values){
        for(let i =0; i<values.length;i++){
            if(values[i] == 0){
                this.responseCount["No"]++
            }
            if(values[i] == 0.25){
                this.responseCount["Yes, for some"]++
            }
            if(values[i] == 0.5){
                this.responseCount["Yes, for most"]++
            }
            if(values[i] == 1){
                this.responseCount["Yes, for all"]++
            }
        }
    }
    

    computeResults(){
        for (const bussFunc in this.sammModel){
            
            for (const practice in this.sammModel[bussFunc]["practices"]){
                this.practiceNames.push(practice);
                // Answers is map containing assessmentState data only for that practice
                var answers = this.sammModel[bussFunc]["practices"][practice]["answers"];
                // get answer keys (this is the question range for the practice)
                var questions = Array.from( answers.keys());
                var question_values = Array.from( answers.values());
                if (this.isPracticeCompleted(question_values)){
                    this.sortResponseCount(question_values);
                    var lvl1 = (question_values[0] + question_values[3]) / 2
                    var lvl2 = (question_values[1] + question_values[4]) / 2
                    var lvl3 = (question_values[2] + question_values[5]) / 2
                    var score = lvl1 + lvl2 + lvl3;
                    if (bussFunc === "Implementation"){
                        console.log('practice',practice, 'score', score);
                    }
                    this.sammModel[bussFunc]["practices"][practice]["score"] = score
                    this.sammModel[bussFunc]["totalScore"] += score / 3
                    // this.overallScore += this.sammModel[bussFunc]["totalScore"]
                    this.practiceScores.push(score)
                } else{
                    this.practiceScores.push(0);
                }
                
            }
            this.businessFunctionScores.push(this.sammModel[bussFunc]["totalScore"]);
            this.overallScore += this.sammModel[bussFunc]["totalScore"] / 5;
        }

    }



}
