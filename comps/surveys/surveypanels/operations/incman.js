const incman = () => {return ({
    "type": "panel",
    "name": "Incident Management",
    "elements": [
      {
        "type": "radiogroup",
        "id": "1e005e11997f4929a12fdb939599e77e",
        "title": "Do you analyze log data for security incidents periodically?",
        "titleLocation": "left",
        "description": "You have a contact point for the creation of security incidents",
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
        "id": "13b9816c06444ba99584e657bfa5833d",
        "title": "Do you follow a documented process for incident detection?",
        "titleLocation": "left",
        "description": "The process has a dedicated owner",
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
        "id": "09744a244f8d4076bec35130da92ea2b",
        "title": "Do you review and update the incident detection process regularly?",
        "titleLocation": "left",
        "description": "You perform reviews at least annually",
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
        "id": "0d889a913d484eb39b80f096f3a66019",
        "title": "Do you respond to detected incidents?",
        "titleLocation": "left",
        "description": "You have a defined person or role for incident handling",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some incidents"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the incidents"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the incidents"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "dbb83b0d5b504db6a170710df4df347f",
        "title": "Do you use a repeatable process for incident handling?",
        "titleLocation": "left",
        "description": "You have an agreed upon incident classification",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some incident types"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the incident types"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the incident types"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "91bd2bdc1c734d8dbffc30e37158ab00",
        "title": "Do you have a dedicated incident response team available?",
        "titleLocation": "left",
        "description": "The team performs Root Cause Analysis for all security incidents unless there is a specific reason not to do so",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, some of the time"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, at least half of the time"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, most or all of the time"
          }
        ]
      }
    ],
    "title": "Incident Management",
    "state": "expanded"
  });}
export default incman;