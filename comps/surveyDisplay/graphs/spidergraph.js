export default class SpiderGraph{
    constructor(){
        this.metaData = {
            labels:[],
            datasets:[
                {
                    label: 'Current Assessment',
                    backgroundColor: 'rgba(255, 24, 0, 0.2)',
                    borderColor: 'rgba(255, 99, 132)',
                    pointBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 99, 132, 0.2)',
                    data: [] 
                },
                {
                    label: 'Previous Assessment',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [] 
                }
            ]
        
        }
        this.layout_props = {
            scales: {
                r:{
                    suggestedMin:0,
                    suggestedMax:3
                }
            },
            plugins: {
                title: {
                    display:true,
                    text:"Score for each",
                    padding:{
                        top: 10,
                        bottom:30
                    }
                }
            }
        }
        
    }
    set_title_text(text){
        this.layout_props.plugins.text += text
    }
    reset_data(){
        this.metaData.datasets.data = [];
    }
}