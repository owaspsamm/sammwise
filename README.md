<p align="center">
    <img style="background-color:grey" src="https://owasp.org/assets/images/logo.svg" height="128">
    <h1 align="center">SAMMwise</h1>
</p>

<p align="center">
  <a aria-label="Datacom logo" href="https://datacom.com">
    <img src="https://img.shields.io/badge/MADE%20BY-Datacom-blue.svg?style=for-the-badge&labelColor=white&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMzAiPjxkZWZzLz48cGF0aCBkPSJNLjEuNWwuNCAxLjN2MjYuNGwtLjUuOWg5LjljNi45IDAgMTIuNy01LjYgMTIuNy0xNS4xQzIyLjYgNy4xIDE5LjIuOSAxMiAuNEwuMS41em01LjUgMi44aDMuMkMxMy42IDMuMyAxNyA2LjEgMTcgMTRjMCA5LjctNCAxMS43LTguNiAxMS43SDUuNlYzLjN6bTQ4LjktLjJoNi4xbC45LjcgMS0zLjJINDIuMkw0MS41IDRsMS42LS43aDUuOHYyNS4xbC0uNCAxaDYuNmwtLjQtMVYzLjFoLS4yem00NiAyMS40Yy0xLjUgMS44LTMuNCAyLjctNS41IDIuNy01LjIgMC04LTQuNi04LTExLjggMC02LjIgMi4yLTEyLjcgNy43LTEyLjcgMi4yIDAgNC4zIDEuMyA1LjUgMy43aC40VjIuMUM5OC43LjggOTYuOC4zIDk0LjUuM2MtNy4yIDAtMTMuMyA0LjktMTMuMyAxNS44IDAgOC42IDUuNSAxMy42IDEyLjUgMTMuNiAyLjIgMCA0LjYgMCA2LjYtMS4zdi00LjEuMnptMjYuOS05LjdjMC02LjUtMi44LTE0LjUtMTIuNC0xNC41LTguMyAwLTEzLjEgNi4zLTEzLjEgMTQuNiAwIDkuNCA1IDE0LjggMTIuNCAxNC44IDguMSAwIDEzLjEtNi43IDEzLjEtMTQuOW0tMTIuNi0xMmM1IDAgNi45IDUuOCA2LjkgMTEuMiAwIDYuOS0yLjIgMTMuMy03LjQgMTMuMy01IDAtNi45LTUuNi02LjktMTAuOS4xLTkuNyAyLjktMTMuNiA3LjQtMTMuNk0xNDQuMiAyMUwxMzUuOC41aC00LjZsLjQuOS0xLjkgMjYuNC0uNCAxLjNoMy41bDEuMy0xNy45IDggMTcuOWgxLjlsNy44LTE3LjcgMS41IDE3LjdoNi42bC0uNC0xLjJMMTU3IDEuMmwuMS0uN2gtNC42TDE0NC4yIDIxem0tMTA3LS4zbDIuOCA4LjZoNi41bC0uNy0uNy05LjktMjhoLTUuNmwuNiAxLjYtOS4yIDI2LjEtLjQuN2g0bDIuOC04LjZoOS4ydi4zem0tOC0zLjRsMy40LTEwIDMuNSAxMGgtNi45em00My45IDMuNGwyLjggOC42aDYuNWwtLjctLjlMNzEuNy41aC01LjZsLjYgMS42LTkuMiAyNi4xLS40LjdoNGwyLjgtOC42aDkuMnYuNHptLTguMi0zLjRsMy40LTEwIDMuNSAxMGgtNi45eiIgZmlsbD0iIzAwMjQ3MCIvPjwvc3ZnPgo=">
  </a>
  <img alt="" src="https://img.shields.io/azure-devops/build/datacomappsec/81cece92-c7e5-4254-9ddc-6783fe1e15b7/10?style=for-the-badge">
  <a aria-label="License" href="https://github.com/owaspsamm/sammwise/blob/main/LICENSE">
    <img alt="" src="https://img.shields.io/github/license/owaspsamm/sammwise?style=for-the-badge">
  </a>
  <a aria-label="Join the community" href="https://owasp.org/slack/invite">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=owasp&labelColor=000000&logoWidth=20">
  </a>
</p>

## Introduction 

The mission of OWASP Software Assurance Maturity Model (SAMM) is to be the prime maturity model for software assurance that provides an effective and measurable way for all types of organizations to analyze and improve their software security posture. OWASP SAMM supports the complete software lifecycle, including development and acquisition, and is technology and process agnostic. It is intentionally built to be evolutive and risk-driven in nature.

SAMMwise is an open source Web App to calculate the Maturity score of an individual, enterprise, or project using the SAMM model. The application walks you through the assessment, allows you to save and re-use previously completed assessments, and presents the results in a similar style to the spreadsheet.

## Getting Started

Refer to the Build Options section below for how to setup and run the application.

**TODO:** Upload docker container to dockerhub.

Both the docker and npm options will run the application on port 3000. The application can be accessed by navigation to http://localhost:3000 in your browser.

**Survey**

The survey page (/survey) allows for users to perform an assessment. A SAMM survey rating your given project or enterprise against five domains: Governance, Design, Implementation, Verification, and Operations. Each domain consists of three subdomains which themselves consist of six questions. (**TODO**:) Further information about each question or domain can be viewed by hovering over the informational icons.

There is an optional sixth survey panel where you can enter project metadata that will be included in the results page.

Please refer to the [OWASP Foundation documentation](https://owaspsamm.org/about/) for guidance on the use of Software Assurance Maturity Model. 

**Report**

Upon completion of a survey, you will be redirected to the report page and presented with the results of the survey.

It is possible to save the results of your survey, the bottom of the results page allows you to save the results to the browsers local storage, or download a copy of the json to your device. This latter option allows for the offline sharing of results.

Changes to re-uploaded results will be visualised in the report graphs.

## Build Options
### Docker Compose (Recommended)

Use the included docker-compose.yml file to quickly get up and running.
Requires docker and docker-compose on the source system.

`docker-compose up`

### Node

Requires npm 10.3 or higher to run.
First pull down the required dependencies

`npm install`

Then run the following depending on your use case:

`npm run dev` (developer mode) 

**OR**

`npm run build`

`npm run start`

## Contribute

Please sumbit a Pull Request for bug fixes and feature enhancements.
