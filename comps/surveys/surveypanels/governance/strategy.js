const strategy =()=>{
    return({
      "type": "panel",
      "name": "Strategy and Metrics",
      "elements": [
        {
          name:"question1",
          "type": "radiogroup",
          "id": "64f49a28334e4a40a04e534225a941d2",
          "title": "Do you understand the enterprise-wide risk appetite for your applications ?",
          "titleLocation": "left",
          "description": "You capture the risk appetite of your organization's executive leadership",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "No"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Yes, it covers general risks"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Yes, it covers organization-specific risks"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Yes, it covers risks and opportunities"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "8fd0374f0b63476eacb3cadca99b1538",
          "title": "Do you have a strategic plan for application security and use it to make decisions?",
          "titleLocation": "left",
          "description": "The plan reflects the organization's business priorities and risk appetite",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "No"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Yes, we review it annually"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Yes, we consult the plan before making significant decisions"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Yes, we consult the plan often, and it is aligned with our application security strategy"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "74eaee0cbf454a46adeb2619850bbcb3",
          "title": "Do you regularly review and update the Strategic Plan for Application Security?",
          "titleLocation": "left",
          "description": "You review and update the plan in response to significant changes in the business environment, the organization, or its risk appetite",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "No"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Yes, but review is ad-hoc"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Yes, we review it at regular times"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Yes, we review it at least annually"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "6aa85d5f3c03428aa064447fa50fa66b",
          "title": "Do you use a set of metrics to measure the effectiveness and efficiency of the application security program across applications?",
          "titleLocation": "left",
          "description": "You document each metric, including a description of the sources, measurement coverage, and guidance on how to use it to explain application security trends",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "No"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Yes, for one metrics category"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Yes, for two metrics categories"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Yes, for all three metrics categories"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "26f12b057f2b44f386d9af391383b590",
          "title": "Did you define Key Perfomance Indicators (KPI) from available application security metrics?",
          "titleLocation": "left",
          "description": "You defined KPIs after gathering enough information to establish realistic objectives",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "No"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Yes, for some of the metrics"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Yes, for at least half of the metrics"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Yes, for most or all of the metrics"
            }
          ]
        },
        {
          "type": "radiogroup",
          "id": "efdc34fbb75b405b8107d63d58fa7286",
          "title": "Do you update the Application Security strategy and roadmap based on application security metrics and KPIs?",
          "titleLocation": "left",
          "description": "You review KPIs at least yearly for their efficiency and effectiveness",
          "choices": [
            {
              "value": 0,
              "weight": 1,
              "text": "No"
            },
            {
              "value": 0.25,
              "weight": 1,
              "text": "Yes, but review is ad-hoc"
            },
            {
              "value": 0.5,
              "weight": 1,
              "text": "Yes, we review it at regular times"
            },
            {
              "value": 1,
              "weight": 1,
              "text": "Yes, we review it at least annually"
            }
          ]
        }
      ],
      "title": "Strategy and Metrics",
      "state": "expanded"
    });
}

export default strategy;