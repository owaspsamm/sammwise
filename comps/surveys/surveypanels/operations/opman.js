const opman = () => {return ({
    "type": "panel",
    "name": "Operational Management",
    "elements": [
      {
        "type": "radiogroup",
        "id": "41b0c2ab37774000b2b81077605bbd93",
        "title": "Do you protect and handle information according to protection requirements for data stored and processed on each application?",
        "titleLocation": "left",
        "description": "You know the data elements processed and stored by each application",
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
        "id": "424c004afec041058e89c396c9e88930",
        "title": "Do you maintain a data catalog, including types, sensitivity levels, and processing and storage locations?",
        "titleLocation": "left",
        "description": "The data catalog is stored in an accessible location",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some of our data"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of our data"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of our data"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "8176c4588bdd4e979e3c82566450696a",
        "title": "Do you regularly review and update the data catalog and your data protection policies and procedures?",
        "titleLocation": "left",
        "description": "You have automated monitoring to detect attempted or actual violations of the Data Protection Policy",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, we do it when requested"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, we do it every few years"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, we do it at least annually"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "b50d81aba3734cb59d618fd74bc5c99e",
        "title": "Do you identify and remove systems, applications, application dependencies, or services that are no longer used, have reached end of life, or are no longer actively developed or supported?",
        "titleLocation": "left",
        "description": "You do not use unsupported applications or dependencies",
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
        "id": "f9c5a8649ddf4168b6f62d0018a32704",
        "title": "Do you follow an established process for removing all associated resources, as part of decommissioning of unused systems, applications, application dependencies, or services?",
        "titleLocation": "left",
        "description": "You document the status of support for all released versions of your products, in an accessible location",
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
        "id": "54ad3e4182844623b3290901c1a1932d",
        "title": "Do you regularly evaluate the lifecycle state and support status of every software asset and underlying infrastructure component, and estimate their end of life?",
        "titleLocation": "left",
        "description": "Your end of life management process is agreed upon",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "No"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Yes, for some of the assets"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Yes, for at least half of the assets"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Yes, for most or all of the assets"
          }
        ]
      }
    ],
    "title": "Operational Management",
    "state": "collapsed"
  });}
export default opman;