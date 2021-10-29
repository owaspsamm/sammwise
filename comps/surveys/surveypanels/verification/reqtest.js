const reqtest = () => {return ({
    "type": "panel",
    "name": "Requirements-driven Testing",
    "elements": [
      {
        "type": "radiogroup",
        "id": "cb085e0a25724700bc10c73cfcc8f6a5",
        "title": "Do you test applications for the correct functioning of standard security controls?",
        "titleLocation": "left",
        "description": "Security testing at least verifies the implementation of authentication, access control, input validation, encoding and escaping data, and encryption controls",
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
        "id": "d6b26a63243d4142bd2a8317e2875a03",
        "title": "Do you consistently write and execute test scripts to verify the functionality of security requirements?",
        "titleLocation": "left",
        "description": "You tailor tests to each application and assert expected security functionality",
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
        "id": "35413be30d9f415dbde45edbe3b17f31",
        "title": "Do you automatically test applications for security regressions?",
        "titleLocation": "left",
        "description": "You consistently write tests for all identified bugs (possibly exceeding a pre-defined severity threshhold)",
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
        "id": "749893a53df24c32bc887b6d5f7b3f7b",
        "title": "Do you test applications using randomization or fuzzing techniques?",
        "titleLocation": "left",
        "description": "Testing covers most or all of the application's main input parameters",
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
        "id": "b2afb33fe6ef4b6e90e029059f7a7124",
        "title": "Do you create abuse cases from functional requirements and use them to drive security tests?",
        "titleLocation": "left",
        "description": "Important business functionality has corresponding abuse cases",
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
      },
      {
        "type": "radiogroup",
        "id": "814caca2fc5241dcb90c48302ac031b2",
        "title": "Do you perform denial of service and security stress testing?",
        "titleLocation": "left",
        "description": "Stress tests target specific application resources (e.g. memory exhaustion by saving large amounts of data to a user session)",
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
    "title": "Requirements-driven Testing",
    "state": "collapsed"
  });}
export default reqtest;