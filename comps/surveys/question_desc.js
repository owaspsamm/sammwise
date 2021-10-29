const question_desc = ()=>{ 
    return (
      {
         "Do you understand the enterprise-wide risk appetite for your applications ?":[
            "You capture the risk appetite of your organization's executive leadership",
            "The organization's leadership vet and approve the set of risks",
            "You identify the main business and technical threats to your assets and data",
            "You document risks and store them in an accessible location"
         ],
         "Do you use a set of metrics to measure the effectiveness and efficiency of the application security program across applications?":[
            "You document each metric, including a description of the sources, measurement coverage, and guidance on how to use it to explain application security trends",
            "Metrics include measures of efforts, results, and the environment measurement categories",
            "Most of the metrics are frequently measured, easy or inexpensive to gather, and expressed as a cardinal number or a percentage",
            "Application security and development teams publish metrics"
         ],
         "Do you have a strategic plan for application security and use it to make decisions?":[
            "The plan reflects the organization's business priorities and risk appetite",
            "The plan includes measurable milestones and a budget",
            "The plan is consistent with the organization's business drivers and risks",
            "The plan lays out a roadmap for strategic and tactical initiatives",
            "You have buy-in from stakeholders, including development teams"
         ],
         "Did you define Key Perfomance Indicators (KPI) from available application security metrics?":[
            "You defined KPIs after gathering enough information to establish realistic objectives",
            "You developed KPIs with the buy-in from the leadership and teams responsible for application security",
            "KPIs are available to the application teams and include acceptability thresholds and guidance in case teams need to take action",
            "Success of the application security program is clearly visible based on defined KPIs"
         ],
         "Do you regularly review and update the Strategic Plan for Application Security?":[
            "You review and update the plan in response to significant changes in the business environment, the organization, or its risk appetite",
            "Plan update steps include reviewing the plan with all the stakeholders and updating the business drivers and strategies",
            "You adjust the plan and roadmap based on lessons learned from completed roadmap activities",
            "You publish progress information on roadmap activities, making sure they are available to all stakeholders"
         ],
         "Do you update the Application Security strategy and roadmap based on application security metrics and KPIs?":[
            "You review KPIs at least yearly for their efficiency and effectiveness",
            "KPIs and application security metrics trigger most of the changes to the application security strategy"
         ],
         "Do you have and apply a common set of policies and standards throughout your organization?":[
            "You have adapted existing standards appropriate for the organization\u00e2\u20ac\u2122s industry to account for domain-specific considerations",
            "Your standards are aligned with your policies and incorporate technology-specific implementation guidance"
         ],
         "Do you have a complete picture of your external compliance obligations?":[
            "You have identified all sources of external compliance obligations",
            "You have captured and reconciled compliance obligations from all sources"
         ],
         "Do you publish the organization's policies as test scripts or run-books for easy interpretation by development teams?":[
            "You create verification checklists and test scripts where applicable, aligned with the policy's requirements and the implementation guidance in the associated standards",
            "You create versions adapted to each development methodology and technology the organization uses"
         ],
         "Do you have a standard set of security requirements and verification procedures addressing the organization's external compliance obligations?":[
            "You map each external compliance obligation to a well-defined set of application requirements",
            "You define verification procedures, including automated tests, to verify compliance with compliance-related requirements"
         ],
         "Do you regularly report on policy and standard compliance, and use that information to guide compliance improvement efforts?":[
            "You have procedures (automated, if possible) to regularly generate compliance reports",
            "You deliver compliance reports to all relevant stakeholders",
            "Stakeholders use the reported compliance status information to identify areas for improvement"
         ],
         "Do you regularly report on adherence to external compliance obligations and use that information to guide efforts to close compliance gaps?":[
            "You have established, well-defined compliance metrics",
            "You measure and report on applications' compliance metrics regularly",
            "Stakeholders use the reported compliance status information to identify compliance gaps and prioritize gap remediation efforts"
         ],
         "Do you require employees involved with application development to take SDLC training?":[
            "Training is repeatable, consistent, and available to anyone involved with software development lifecycle",
            "Training includes the latest OWASP Top 10 if appropriate and includes concepts such as Least Privilege, Defense-in-Depth, Fail Secure (Safe), Complete Mediation, Session Management, Open Design, and Psychological Acceptability",
            "Training requires a sign-off or an acknowledgement from attendees",
            "You have updated the training in the last 12 months",
            "Training is required during employees' onboarding process"
         ],
         "Have you identified a Security Champion for each development team?":[
            "Security Champions receive appropriate training",
            "Application Security and Development teams receive periodic briefings from Security Champions on the overall status of security initiatives and fixes",
            "The Security Champion reviews the results of external testing before adding to the application backlog"
         ],
         "Is training customized for individual roles such as developers, testers, or security champions?":[
            "Training includes all topics from maturity level 1, and adds more specific tools, techniques, and demonstrations",
            "Training is mandatory for all employees and contractors",
            "Training includes input from in-house SMEs and trainees",
            "Training includes demonstrations of tools and techniques developed in-house",
            "You use feedback to enhance and make future training more relevant"
         ],
         "Does the organization have a Secure Software Center of Excellence (SSCE)?":[
            "The SSCE has a charter defining its role in the organization",
            "Development teams review all significant architectural changes with the SSCE",
            "The SSCE publishes SDLC standards and guidelines related to Application Security",
            "Product Champions are responsible for promoting the use of specific security tools"
         ],
         "Have you implemented a Learning Management System or equivalent to track employee training and certification processes?":[
            "A Learning Management System (LMS) is used to track trainings and certifications",
            "Training is based on internal standards, policies, and procedures",
            "You use certification programs or attendance records to determine access to development systems and resources"
         ],
         "Is there a centralized portal where developers and application security professionals from different teams and business units are able to communicate and share information?":[
            "The organization promotes use of a single portal across different teams and business units",
            "The portal is used for timely information such as notification of security incidents, tool updates, architectural standard changes, and other related announcements",
            "The portal is widely recognized by developers and architects as a centralized repository of the organization-specific application security information",
            "All content is considered persistent and searchable",
            "The portal provides access to application-specific security metrics"
         ],
         "Do you classify applications according to business risk based on a simple and predefined set of questions?":[
            "An agreed-upon risk classification exists",
            "The application team understands the risk classification",
            "The risk classification covers critical aspects of business risks the organization is facing",
            "The organization has an inventory for the applications in scope"
         ],
         "Do you identify and manage architectural design flaws with threat modeling?":[
            "You perform threat modeling for high-risk applications",
            "You use simple threat checklists, such as STRIDE",
            "You persist the outcome of a threat model for later use"
         ],
         "Do you use centralized and quantified application risk profiles to evaluate business risk?":[
            "The application risk profile is in line with the organizational risk standard",
            "The application risk profile covers impact to security and privacy",
            "You validate the quality of the risk profile manually and/or automatically",
            "The application risk profiles are stored in a central inventory"
         ],
         "Do you use a standard methodology, aligned on your application risk levels?":[
            "You train your architects, security champions, and other stakeholders on how to do practical threat modeling",
            "Your threat modeling methodology includes at least diagramming, threat identification, design flaw mitigations, and how to validate your threat model artifacts",
            "Changes in the application or business context trigger a review of the relevant threat models",
            "You capture the threat modeling artifacts with tools that are used by your application teams"
         ],
         "Do you regularly review and update the risk profiles for your applications?":[
            "The organizational risk standard considers historical feedback to improve the evaluation method",
            "Significant changes in the application or business context trigger a review of the relevant risk profiles"
         ],
         "Do you regularly review and update the threat modeling methodology for your applications?":[
            "The threat model methodology considers historical feedback for improvement",
            "You regularly (e.g., yearly) review the existing threat models to verify that no new threats are relevant for your applications",
            "You automate parts of your threat modeling process with threat modeling tools"
         ],
         "Do project teams specify security requirements during development?":[
            "Teams derive security requirements from functional requirements and customer or organization concerns",
            "Security requirements are specific, measurable, and reasonable",
            "Security requirements are in line with the organizational baseline"
         ],
         "Do stakeholders review vendor collaborations for security requirements and methodology?":[
            "You consider including specific security requirements, activities, and processes when creating third-party agreements",
            "A vendor questionnaire is available and used to assess the strengths and weaknesses of your suppliers"
         ],
         "Do you define, structure, and include prioritization in the artifacts of the security requirements gathering process?":[
            "Security requirements take into consideration domain specific knowledge when applying policies and guidance to product development",
            "Domain experts are involved in the requirements definition process",
            "You have an agreed upon structured notation for security requirements",
            "Development teams have a security champion dedicated to reviewing security requirements and outcomes"
         ],
         "Do vendors meet the security responsibilities and quality measures of service level agreements defined by the organization?":[
            "You discuss security requirements with the vendor when creating vendor agreements",
            "Vendor agreements provide specific guidance on security defect remediation within an agreed upon timeframe",
            "The organization has a templated agreement of responsibilities and service levels for key vendor security processes",
            "You measure key performance indicators"
         ],
         "Do you use a standard requirements framework to streamline the elicitation of security requirements?":[
            "A security requirements framework is available for project teams",
            "The framework is categorized by common requirements and standards-based requirements",
            "The framework gives clear guidance on the quality of requirements and how to describe them",
            "The framework is adaptable to specific business requirements"
         ],
         "Are vendors aligned with standard security controls and software development tools and processes that the organization utilizes?":[
            "The vendor has a secure SDLC that includes secure build, secure deployment, defect management, and incident management that align with those used in your organization",
            "You verify the solution meets quality and security objectives before every major release",
            "When standard verification processes are not available, you use compensating controls such as software composition analysis and independent penetration testing"
         ],
         "Do teams use security principles during design?":[
            "You have an agreed upon checklist of security principles",
            "You store your checklist in an accessible location",
            "Relevant stakeholders understand security principles"
         ],
         "Do you evaluate the security quality of important technologies used for development?":[
            "You have a list of the most important technologies used in or in support of each application",
            "You identify and track technological risks",
            "You ensure the risks to these technologies are in line with the organizational baseline"
         ],
         "Do you use shared security services during design?":[
            "You have a documented list of reusable security services, available to relevant stakeholders",
            "You have reviewed the baseline security posture for each selected service",
            "Your designers are trained to integrate each selected service following available guidance"
         ],
         "Do you have a list of recommended technologies for the organization?":[
            "The list is based on technologies used in the software portfolio",
            "Lead architects and developers review and approve the list",
            "You share the list across the organization",
            "You review and update the list at least yearly"
         ],
         "Do you base your design on available reference architectures?":[
            "You have one or more approved reference architectures documented and available to stakeholders",
            "You improve the reference architectures continuously based on insights and best practices",
            "You provide a set of components, libraries, and tools to implement each reference architecture"
         ],
         "Do you enforce the use of recommended technologies within the organization?":[
            "You monitor applications regularly for the correct use of the recommended technologies",
            "You solve violations against the list accoranding to organizational policies",
            "You take action if the number of violations falls outside the yearly objectives"
         ],
         "Is your full build process formally described?":[
            "You have enough information to recreate the build processes",
            "Your build documentation up to date",
            "Your build documentation is stored in an accessible location",
            "Produced artifact checksums are created during build to support later verification",
            "You harden the tools that are used within the build process"
         ],
         "Do you have solid knowledge about dependencies you're relying on?":[
            "You have a current bill of materials (BOM) for every application",
            "You can quickly find out which applications are affected by a particular CVE",
            "You have analyzed, addressed, and documented findings from dependencies at least once in the last three months"
         ],
         "Is the build process fully automated?":[
            "The build process itself doesn't require any human interaction",
            "Your build tools are hardened as per best practice and vendor guidance",
            "You encrypt the secrets required by the build tools and control access based on the principle of least privilege"
         ],
         "Do you handle 3rd party dependency risk by a formal process?":[
            "You keep a list of approved dependencies that meet predefined criteria",
            "You automatically evaluate dependencies for new CVEs and alert responsible staff",
            "You automatically detect and alert to license changes with possible impact on legal application usage",
            "You track and alert to usage of unmaintained dependencies",
            "You reliably detect and remove unnecessary dependencies from the software"
         ],
         "Do you enforce automated security checks in your build processes?":[
            "Builds fail if the application doesn't meet a predefined security baseline",
            "You have a maximum accepted severity for vulnerabilties",
            "You log warnings and failures in a centralized system",
            "You select and configure tools to evaluate each application against its security requirements at least once a year"
         ],
         "Do you prevent build of software if it's affected by vulnerabilities in dependencies?":[
            "Your build system is connected to a system for tracking 3rd party dependency risk, causing build to fail unless the vulnerability is evaluated to be a false positive or the risk is explicitly accepted",
            "You scan your dependencies using a static analysis tool",
            "You report findings back to dependency authors using an established responsible disclosure process",
            "Using a new dependency not evaluated for security risks causes the build to fail"
         ],
         "Do you use repeatable deployment processes?":[
            "You have enough information to run the deployment processes",
            "Your deployment documentation up to date",
            "Your deployment documentation is accessible to relevant stakeholders",
            "You ensure that only defined qualified personnel can trigger a deployment",
            "You harden the tools that are used within the deployment process"
         ],
         "Do you limit access to application secrets according to the least privilege principle?":[
            "You store production secrets protected in a secured location",
            "Developers do not have access to production secrets",
            "Production secrets are not available in non-production environments"
         ],
         "Are deployment processes automated and employing security checks?":[
            "Deployment processes are automated on all stages",
            "Deployment includes automated security testing procedures",
            "You alert responsible staff to identified vulnerabilities",
            "You have logs available for your past deployments for a defined period of time"
         ],
         "Do you inject production secrets into configuration files during deployment?":[
            "Source code files no longer contain active application secrets",
            "Under normal circumstances, no humans access secrets during deployment procedures",
            "You log and alert to any abnormal access to secrets"
         ],
         "Do you consistently validate the integrity of deployed artifacts?":[
            "You prevent or roll back deployment if you detect an integrity breach",
            "The verification is done against signatures created during the build time",
            "If checking of signatures is not possible (e.g. externally build software), you introduce compensating measures"
         ],
         "Do you practice proper lifecycle management for application secrets?":[
            "You generate and synchronize secrets using a vetted solution",
            "Secrets are different between different application instances",
            "Secrets are regularly updated"
         ],
         "Do you track all known security defects in accessible locations?":[
            "You can easily get an overview of all security defects impacting one application",
            "You have at least a rudimentary classification scheme in place",
            "The process includes a strategy for handling false positives and duplicate entries",
            "The defect management system covers defects from various sources and activities"
         ],
         "Do you use basic metrics about recorded security defects to carry out quick win improvement activities?":[
            "You analyzed your recorded metrics at least once in the last year",
            "At least basic information about this initiative is recorded and available",
            "You have identified and carried out at least one quick win activity based on the data"
         ],
         "Do you keep an overview of the state of security defects across the organization?":[
            "A single severity scheme is applied to all defects across the organization",
            "The scheme includes SLAs for fixing particular severity classes",
            "You regularly report compliance to SLAs"
         ],
         "Do you improve your security assurance program upon standardized metrics?":[
            "You document metrics for defect classification and categorization and keep them up to date",
            "Executive management regularly receives information about defects and has acted upon it in the last year",
            "You regularly share technical details about security defects among teams"
         ],
         "Do you enforce SLAs for fixing security defects?":[
            "You automatically alert of SLA breaches and transfer respective defects to the risk management process",
            "You integrate relevant tooling (e.g. monitoring, build, deployment) with the defect management system"
         ],
         "Do you regularly evaluate the effectiveness of your security metrics so that its input helps drive your security strategy?":[
            "You have analyzed the effectivenss of the security metrics at least once in the last year",
            "Where possible, you verify the correctness of the data automatically",
            "The metrics is aggregated with other sources like threat intelligence or incident management",
            "You derived at least one strategic activity from the metrics in the last year"
         ],
         "Do you review the application architecture for key security objectives on an ad-hoc basis?":[
            "You have an agreed upon model of the overall software architecture",
            "You include components, interfaces, and integrations in the architecture model",
            "You verify the correct provision of general security mechanisms",
            "You log missing security controls as defects"
         ],
         "Do you review the application architecture for mitigations of typical threats on an ad-hoc basis?":[
            "You have an agreed upon model of the overall software architecture",
            "Security savvy staff conduct the review",
            "You consider different types of threats, including insider and data-related one"
         ],
         "Do you regularly review the security mechanisms of your architecture?":[
            "You review compliance with internal and external requirements",
            "You systematically review each interface in the system",
            "You use a formalized review method and structured validation",
            "You log missing security mechanisms as defects"
         ],
         "Do you regularly evaluate the threats to your architecture?":[
            "You systematically review each threat identified in the Threat Assessment",
            "Trained or experienced people lead review exercise",
            "You identify mitigating design-level features for each identified threat",
            "You log unhandled threats as defects"
         ],
         "Do you regularly review the effectiveness of the security controls?":[
            "You evaluate the preventive, detective, and response capabilities of security controls",
            "You evaluate the strategy alignment, appropriate support, and scalability of security controls",
            "You evaluate the effectiveness at least yearly",
            "You log identified shortcomings as defects"
         ],
         "Do you regularly update your reference architectures based on architecture assessment findings?":[
            "You assess your architectures in a standardized, documented manner",
            "You use recurring findings to trigger a review of reference architectures",
            "You independently review the quality of the architecture assessments on an ad-hoc basis",
            "You use reference architecture updates to trigger reviews of relevant shared solutions, in a risk-based manner"
         ],
         "Do you test applications for the correct functioning of standard security controls?":[
            "Security testing at least verifies the implementation of authentication, access control, input validation, encoding and escaping data, and encryption controls",
            "Security testing executes whenever the application changes its use of the controls"
         ],
         "Do you test applications using randomization or fuzzing techniques?":[
            "Testing covers most or all of the application's main input parameters",
            "You record and inspect all application crashes for security impact on a best-effort basis"
         ],
         "Do you consistently write and execute test scripts to verify the functionality of security requirements?":[
            "You tailor tests to each application and assert expected security functionality",
            "You capture test results as a pass or fail condition",
            "Tests use a standardized framework or DSL"
         ],
         "Do you create abuse cases from functional requirements and use them to drive security tests?":[
            "Important business functionality has corresponding abuse cases",
            "You build abuse stories around relevant personas with well-defined motivations and characteristics",
            "You capture identified weaknesses as security requirements"
         ],
         "Do you automatically test applications for security regressions?":[
            "You consistently write tests for all identified bugs (possibly exceeding a pre-defined severity threshhold)",
            "You collect security tests in a test suite that is part of the existing unit testing framework"
         ],
         "Do you perform denial of service and security stress testing?":[
            "Stress tests target specific application resources (e.g. memory exhaustion by saving large amounts of data to a user session)",
            "You design tests around relevant personas with well-defined capabilities (knowledge, resources)",
            "You feed the results back to the Design practices"
         ],
         "Do you scan applications with automated security testing tools?":[
            "You dynamically generate inputs for security tests using automated tools",
            "You choose the security testing tools to fit the organization's architecture and technology stack, and balance depth and accuracy of inspection with usability of findings to the organization"
         ],
         "Do you manually review the security quality of selected high-risk components?":[
            "Criteria exist to help the reviewer focus on high-risk components",
            "Qualified personnel conduct reviews following documented guidelines",
            "You address findings in accordance with the organization's defect management policy"
         ],
         "Do you customize the automated security tools to your applications and technology stacks?":[
            "You tune and select tool features which match your application or technology stack",
            "You minimize false positives by silencing or automatically filter irrelevant warnings or low probability findings",
            "You minimize false negatives by leverage tool extensions or DSLs to customize tools for your application or organizational standards"
         ],
         "Do you perform penetration testing for your applications at regular intervals?":[
            "Penetration testing uses application-specific security test cases to evaluate security",
            "Penetration testing looks for both technical and logical issues in the application",
            "Stakeholders review the test results and handle them in accordance with the organization's risk management",
            "Qualified personnnel performs penetration testing"
         ],
         "Do you integrate automated security testing into the build and deploy process?":[
            "Management and business stakeholders track and review test results throughout the development cycle",
            "You merge test results into a central dashboard and feed them into defect management"
         ],
         "Do you use the results of security testing to improve the development lifecycle?":[
            "You use results from other security activities to improve integrated security testing during development",
            "You review test results and incorporate them into security awareness training and security testing playbooks",
            "Stakeholders review the test results and handle them in accordance with the organization's risk management"
         ],
         "Do you analyze log data for security incidents periodically?":[
            "You have a contact point for the creation of security incidents",
            "You analyze data in accordance with the log data retention periods",
            "The frequency of this analysis is aligned with the criticality of your applications"
         ],
         "Do you respond to detected incidents?":[
            "You have a defined person or role for incident handling",
            "You document security incidents"
         ],
         "Do you follow a documented process for incident detection?":[
            "The process has a dedicated owner",
            "You store process documentation in an accessible location",
            "The process considers an escalation path for further analysis",
            "You train employees responsible for incident detection in this process",
            "You have a checklist of potential attacks to simplify incident detection"
         ],
         "Do you use a repeatable process for incident handling?":[
            "You have an agreed upon incident classification",
            "The process considers Root Case Analysis for high severity incidents",
            "Employees responsible for incident response are trained in this process",
            "Forensic analysis tooling is available"
         ],
         "Do you review and update the incident detection process regularly?":[
            "You perform reviews at least annually",
            "You update the checklist of potential attacks with external and internal data"
         ],
         "Do you have a dedicated incident response team available?":[
            "The team performs Root Cause Analysis for all security incidents unless there is a specific reason not to do so",
            "You review and update the response process at least annually"
         ],
         "Do you harden configurations for key components of your technology stacks?":[
            "You have identified the key components in each technology stack used",
            "You have an established configuration standard for each key component"
         ],
         "Do you identify and patch vulnerable components?":[
            "You have an up-to-date list of components, including version information",
            "You regularly review public sources for vulnerabilities related to your components"
         ],
         "Do you have hardening baselines for your components?":[
            "You have assigned an owner for each baseline",
            "The owner keeps their assigned baselines up to date",
            "You store baselines in an accessible location",
            "You train employees responsible for configurations in these baselines"
         ],
         "Do you follow an established process for updating components of your technology stacks?":[
            "The process includes vendor information for third-party patches",
            "The process considers external sources to gather information about zero day attacks, and includes appropriate risk mitigation steps",
            "The process includes guidance for prioritizing component updates"
         ],
         "Do you monitor and enforce conformity with hardening baselines?":[
            "You perform conformity checks regularly, preferably using automation",
            "You store conformity check results in an accessible location",
            "You follow an established process to address reported non-conformities",
            "You review each baseline at least annually, and update it when required"
         ],
         "Do you regularly evaluate components and review patch level status?":[
            "You update the list with components and versions",
            "You identify and update missing updates according to existing SLA",
            "You review and update the process based on feedback from the people who perform patching"
         ],
         "Do you protect and handle information according to protection requirements for data stored and processed on each application?":[
            "You know the data elements processed and stored by each application",
            "You know the type and sensitivity level of each identified data element",
            "You have controls to prevent propagation of unsanitized sensitive data from production to lower environments"
         ],
         "Do you identify and remove systems, applications, application dependencies, or services that are no longer used, have reached end of life, or are no longer actively developed or supported?":[
            "You do not use unsupported applications or dependencies",
            "You manage customer/user migration from older versions for each product and customer/user group"
         ],
         "Do you maintain a data catalog, including types, sensitivity levels, and processing and storage locations?":[
            "The data catalog is stored in an accessible location",
            "You know which data elements are subject to specific regulation",
            "You have controls for protecting and preserving data throughout its lifetime",
            "You have retention requirements for data, and you destroy backups in a timely manner after the relevant retention period ends"
         ],
         "Do you follow an established process for removing all associated resources, as part of decommissioning of unused systems, applications, application dependencies, or services?":[
            "You document the status of support for all released versions of your products, in an accessible location",
            "The process includes replacement or upgrade of third-party applications, or application dependencies, that have reached end of life",
            "Operating environments do not contain orphaned accounts, firewall rules, or other configuration artifacts"
         ],
         "Do you regularly review and update the data catalog and your data protection policies and procedures?":[
            "You have automated monitoring to detect attempted or actual violations of the Data Protection Policy",
            "You have tools for data loss prevention, access control and tracking, or anomalous behavior detection",
            "You periodically audit the operation of automated mechanisms, including backups and record deletions"
         ],
         "Do you regularly evaluate the lifecycle state and support status of every software asset and underlying infrastructure component, and estimate their end of life?":[
            "Your end of life management process is agreed upon",
            "You inform customers and user groups of product timelines to prevent disruption of service or support",
            "You review the process at least annually"
         ]
      }
   );
}

export default question_desc