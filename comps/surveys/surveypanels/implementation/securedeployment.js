const securedeployment = () => {return ({
    "type": "panel",
    "name": "Secure Deployment",
    "elements": [
      {
        "type": "radiogroup",
        "id": "24697d43707b4d83a6a5819a9db9a75d",
        "title": "Do you use repeatable deployment processes?",
        "titleLocation": "left",
        "description": "You have enough information to run the deployment processes",
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
        "id": "7ef6753cda0d4da6ad194e56650f584d",
        "title": "Are deployment processes automated and employing security checks?",
        "titleLocation": "left",
        "description": "Deployment processes are automated on all stages",
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
        "id": "f87fddbf283a4c38b45a3125d827dd27",
        "title": "Do you consistently validate the integrity of deployed artifacts?",
        "titleLocation": "left",
        "description": "You prevent or roll back deployment if you detect an integrity breach",
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
        "id": "37c6a5618a6344b386eb872619cfe53f",
        "title": "Do you limit access to application secrets according to the least privilege principle?",
        "titleLocation": "left",
        "description": "You store production secrets protected in a secured location",
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
        "id": "c5f66e97db174d8c9dc2d82fbad9d4e3",
        "title": "Do you inject production secrets into configuration files during deployment?",
        "titleLocation": "left",
        "description": "Source code files no longer contain active application secrets",
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
        "id": "50af7a14ddf2408fb4576e3972cf13e3",
        "title": "Do you practice proper lifecycle management for application secrets?",
        "titleLocation": "left",
        "description": "You generate and synchronize secrets using a vetted solution",
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
    "title": "Secure Deployment",
    "state": "collapsed"
  });}
export default securedeployment;