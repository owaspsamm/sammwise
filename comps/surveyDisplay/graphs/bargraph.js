export default class Bargraph{
    constructor(){
        this.metaData = {
            labels: [],
            datasets: [{
              label: 'Current Assessment',
              backgroundColor: 'rgba(255,99,132,0.7)',
              borderColor: 'rgb(11,227,210)',
              borderWidth: 1,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(255, 159, 64, 0.7)',
                  'rgba(255, 205, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(153, 102, 255, 0.7)',
                  'rgba(201, 203, 207, 0.7)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
              data: []
              }]  
        }
        
        this.layout_props = {
            indexAxis: 'y',
            aspectRatio: NaN,
            responsive: true,
            maintainAspectRatio: true,
        }
        
        
    }

    set_aspect_ratio(ratio){
        this.layout_props.aspectRatio = ratio
    }

    set_labels(label_array){
        this.metaData.labels = this.metaData.labels.concat(label_array)
    }

    resetData(){
        this.metaData.datasets[0].data = [];
        if(this.metaData.datasets.length > 1){
            this.metaData.datasets[1].data = [];
        }
    }

    // initiateGraphData(){
    //     if(this.metaData.labels > 0){
    //         this.metaData.data = new Map()
    //         for (let i =0;i<labels.length;i++){
    //             this.metaData.datasets.data.set(labels[i], 0)
    //         }
    //     }
    // }

  
}
