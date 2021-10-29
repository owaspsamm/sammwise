const sectest = () => {return ({
    "type": "panel",
    "name": "Security Testing",
    "elements": [
      {
        "type": "radiogroup",
        "id": "bef645da8ccd477bbd10685dd52ad40e",
        "title": "Do you scan applications with automated security testing tools?",
        "titleLocation": "left",
        "description": "You dynamically generate inputs for security tests using automated tools",
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
        "id": "c013b6f9d973425cb63f21f4f8b84c30",
        "title": "Do you customize the automated security tools to your applications and technology stacks?",
        "titleLocation": "left",
        "description": "You tune and select tool features which match your application or technology stack",
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
        "id": "009a8fafe5dd41889947a6b2c6769bbe",
        "title": "Do you integrate automated security testing into the build and deploy process?",
        "titleLocation": "left",
        "description": "Management and business stakeholders track and review test results throughout the development cycle",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, some of it"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, at least half of it"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, most or all of it"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "77dd81adf35f43608408e548c4972136",
        "title": "Do you manually review the security quality of selected high-risk components?",
        "titleLocation": "left",
        "description": "Criteria exist to help the reviewer focus on high-risk components",
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
        "id": "9a2af155ba424edfb321aa7592a09ed5",
        "title": "Do you perform penetration testing for your applications at regular intervals?",
        "titleLocation": "left",
        "description": "Penetration testing uses application-specific security test cases to evaluate security",
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
        "id": "b73bf8f0462340659e252e6471c6e831",
        "title": "Do you use the results of security testing to improve the development lifecycle?",
        "titleLocation": "left",
        "description": "You use results from other security activities to improve integrated security testing during development",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, but we improve it ad-hoc"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, we we improve it at regular times"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, we improve it at least annually"
          }
        ]
      }
    ],
    "title": "Security Testing",
    "state": "collapsed"
  });}
export default sectest;