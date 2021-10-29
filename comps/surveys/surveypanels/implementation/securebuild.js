const securebuild = () => {return ({
    "type": "panel",
    "name": "Secure Build",
    "elements": [
      {
        "type": "radiogroup",
        "id": "70d6044a223b402c8e2b6f9d1e936641",
        "title": "Is your full build process formally described?",
        "titleLocation": "left",
        "description": "You have enough information to recreate the build processes",
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
        "id": "b5d33583538b4878bb4674a5f838b8ea",
        "title": "Is the build process fully automated?",
        "titleLocation": "left",
        "description": "The build process itself doesn't require any human interaction",
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
        "id": "ee775955bf7f48d294c75f6384232f48",
        "title": "Do you enforce automated security checks in your build processes?",
        "titleLocation": "left",
        "description": "Builds fail if the application doesn't meet a predefined security baseline",
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
        "id": "1e28b82cc3ba4e4ea2552746e17c25af",
        "title": "Do you have solid knowledge about dependencies you're relying on?",
        "titleLocation": "left",
        "description": "You have a current bill of materials (BOM) for every application",
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
        "id": "ef798e60155d453186364c94a8f8935d",
        "title": "Do you handle 3rd party dependency risk by a formal process?",
        "titleLocation": "left",
        "description": "You keep a list of approved dependencies that meet predefined criteria",
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
        "id": "418e98e2939546e69a24d0c3c4c8d217",
        "title": "Do you prevent build of software if it's affected by vulnerabilities in dependencies?",
        "titleLocation": "left",
        "description": "Your build system is connected to a system for tracking 3rd party dependency risk, causing build to fail unless the vulnerability is evaluated to be a false positive or the risk is explicitly accepted",
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
    "title": "Secure Build",
    "state": "expanded"
  });}
export default securebuild;