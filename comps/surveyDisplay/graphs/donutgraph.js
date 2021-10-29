

export default class DonutGraph{
    constructor(){
        this.metaData = {
    
            labels: [
              "Bad",
              "Less than ideal",
              "Okay",
              "Good"
            ],
            datasets: [{
              data: [],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ]
            },{
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 205, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(54, 162, 235)',
                    'rgba(153, 102, 255)',
                    'rgba(201, 203, 207)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                  ]
            }]
        }
        this.options = {
    
            elements: {
              center: {
                text: 'Red is 2/3 of the total numbers',
                color: '#FF6384', // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            }
            
        }
        this.buss_func_data = [0,0,0,0]
    }

    set_buss_func_scores(data_in, i, j){
        //TODO: Change data_in variable name accordingly (currently a test)
        for(let g = 0; g<5;g++){
            if(surveyCalculatorJSON(data_in).Pages[i].panels[j].answers[g] == 0){
                this.buss_func_data[0]++
            }
            if(surveyCalculatorJSON(data_in).Pages[i].panels[j].answers[g] == 0.25){
                this.buss_func_data[1]++
            }
            if(surveyCalculatorJSON(data_in).Pages[i].panels[j].answers[g] == 0.5){
                this.buss_func_data[2]++
            }
            if(surveyCalculatorJSON(data_in).Pages[i].panels[j].answers[g] == 1){
                this.buss_func_data[3]++
            }
        }
    }

    update_properties_dataset(index){
        this.metaData.datasets[0].data.push(this.buss_func_data[index])
    }
}
