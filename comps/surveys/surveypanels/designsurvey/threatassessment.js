const threatassessment = () => {return ({
    "type": "panel",
    "name": "Threat Assessment",
    "elements": [
      {
        "type": "radiogroup",
        "id": "71c02652a9ba4b10a0cc0179c7ce869f",
        "title": "Do you classify applications according to business risk based on a simple and predefined set of questions?",
        "titleLocation": "left",
        "description": "An agreed-upon risk classification exists",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, some of them"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, at least half of them"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, most or all of them"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "897306b66f16454eab7b5a2355d31c11",
        "title": "Do you use centralized and quantified application risk profiles to evaluate business risk?",
        "titleLocation": "left",
        "description": "The application risk profile is in line with the organizational risk standard",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some applications"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the applications"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the applications"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "7e541611f3c749f285ac27f0a9ba7d55",
        "title": "Do you regularly review and update the risk profiles for your applications?",
        "titleLocation": "left",
        "description": "The organizational risk standard considers historical feedback to improve the evaluation method",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, sporadically"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, upon change of the application"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, at least annually"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "e9dcf4f79e2e487fb74df5e15a14a91b",
        "title": "Do you identify and manage architectural design flaws with threat modeling?",
        "titleLocation": "left",
        "description": "You perform threat modeling for high-risk applications",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, some of them"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, at least half of them"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, most or all of them"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "42cfabd13db34fd0b35e92af917eb1b8",
        "title": "Do you use a standard methodology, aligned on your application risk levels?",
        "titleLocation": "left",
        "description": "You train your architects, security champions, and other stakeholders on how to do practical threat modeling",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some applications"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the applications"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the applications"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "cd639e5458ca4f60be60bc9d47314648",
        "title": "Do you regularly review and update the threat modeling methodology for your applications?",
        "titleLocation": "left",
        "description": "The threat model methodology considers historical feedback for improvement",
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
    "title": "Threat Assessment",
    "state": "expanded"
  });}
export default threatassessment;