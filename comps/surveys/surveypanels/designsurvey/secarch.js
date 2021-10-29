const secarch = () => {return ({
    "type": "panel",
    "name": "Security Architecture",
    "elements": [
      {
        "type": "radiogroup",
        "id": "c4eb5618d1814173a995f8aea96f1c0b",
        "title": "Do teams use security principles during design?",
        "titleLocation": "left",
        "description": "You have an agreed upon checklist of security principles",
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
        "id": "3f1a3a84c85f4e339bcc5c9ecca5c73a",
        "title": "Do you use shared security services during design?",
        "titleLocation": "left",
        "description": "You have a documented list of reusable security services, available to relevant stakeholders",
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
        "id": "cb88049632b54a15b3d610c4d492e83e",
        "title": "Do you base your design on available reference architectures?",
        "titleLocation": "left",
        "description": "You have one or more approved reference architectures documented and available to stakeholders",
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
        "id": "47c8fb0cae5944d090d7f73f7632dc9f",
        "title": "Do you evaluate the security quality of important technologies used for development?",
        "titleLocation": "left",
        "description": "You have a list of the most important technologies used in or in support of each application",
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
        "id": "b63b5fa0f5bc455bb5b1dd9168c44000",
        "title": "Do you have a list of recommended technologies for the organization?",
        "titleLocation": "left",
        "description": "The list is based on technologies used in the software portfolio",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some of the technology domains"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the technology domains"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the technology domains"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "f4722a4fdfc44a45be5b5ee8dd7b735f",
        "title": "Do you enforce the use of recommended technologies within the organization?",
        "titleLocation": "left",
        "description": "You monitor applications regularly for the correct use of the recommended technologies",
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
      }
    ],
    "title": "Security Architecture",
    "state": "collapsed"
  });}
export default secarch;