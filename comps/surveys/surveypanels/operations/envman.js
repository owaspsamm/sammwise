const envman = () => {return ({
    "type": "panel",
    "name": "Environmental Management",
    "elements": [
      {
        "type": "radiogroup",
        "id": "1e005e11997f4929a12fdb939599e77e",
        "title": "Do you harden configurations for key components of your technology stacks?",
        "titleLocation": "left",
        "description": "You have identified the key components in each technology stack used",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some components"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the components"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the components"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "41d33402a94c49538554ce77e9de6a72",
        "title": "Do you have hardening baselines for your components?",
        "titleLocation": "left",
        "description": "You have assigned an owner for each baseline",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some components"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the components"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the components"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "f4ec030280ee417099eaf12752a542ae",
        "title": "Do you monitor and enforce conformity with hardening baselines?",
        "titleLocation": "left",
        "description": "You perform conformity checks regularly, preferably using automation",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some components"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the components"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the components"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "180e194b165d421c9d2c89258195a792",
        "title": "Do you identify and patch vulnerable components?",
        "titleLocation": "left",
        "description": "You have an up-to-date list of components, including version information",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some components"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the components"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the components"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "0844b1a3be8b49ec83c7377a9f797cfc",
        "title": "Do you follow an established process for updating components of your technology stacks?",
        "titleLocation": "left",
        "description": "The process includes vendor information for third-party patches",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some components"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the components"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the components"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "6e72179a31c04024bb649346bfb03eb5",
        "title": "Do you regularly evaluate components and review patch level status?",
        "titleLocation": "left",
        "description": "You update the list with components and versions",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some components"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the components"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the components"
          }
        ]
      }
    ],
    "title": "Environmental Management",
    "state": "collapsed"
  });}
export default envman;