import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useEffect } from 'react'

const About = () => {
    
    useEffect(()=> {
        var userState = JSON.parse(sessionStorage.getItem('userState'));
        userState['page'] = "aboutPage";
        userState['has_switched_page'] = true;
        sessionStorage.setItem('userState', JSON.stringify(userState));
    })
    
    return ( 
        <>
            <Head>
                <title>SAMMWise | About </title>
                <meta name = "keywords" content = "owassp-calc"/>

            </Head>
            <div>
                
                <h2 className = {styles.title} >About this tool</h2>
                <p className = {styles.paragraph}>The SAMMwise web application provides a convenient alternative to the 
                    OWASP SAMM Toolkit (Excel workbook) for capturing your SAMM assessment responses.
                     Leveraging several open-source JavaScript frameworks, the SAMMwise application 
                     provides an intuitive, page-oriented workflow for completing a SAMM assessment, 
                     coupled with dynamic graphics to visualize assessment results.
                    </p>

                <h2 className = {styles.title} >Current Capabilities</h2>  
                    <li className = {styles.paragraph}>		Evaluating an organization’s existing software security practices;</li>
                    <li className = {styles.paragraph}>		Building toward a balanced software security assurance program in well-defined iterations;</li>
                    <li className = {styles.paragraph}>		Demonstrating concrete improvements to a security assurance program; and </li>
                    <li className = {styles.paragraph}>		Defining and measuring security-related activities throughout an organization.  </li>  
                <h2 className = {styles.title}>Future Enhancements</h2>  
                    <li className = {styles.paragraph}>			Multi-phase roadmaps - Baseline, plus up to 5 implementation phases</li>
                    <li className = {styles.paragraph}>			Comparison with multiple previous assessments</li>
                    <li className = {styles.paragraph}>			Comparison with SAMM Benchmark data</li>
                    <li className = {styles.paragraph}>			Contribution of de-identified assessment results to SAMM Benchmark Project   </li>  
                <h2 className = {styles.title} >Version History</h2>
                <div style={{float:"right"}}>
                    <Image src = "/DatacomLogo.png" width = {321} height = {61}/>
                </div>
                <p className = {styles.paragraph}>Version 1.0 - The initial release of SAMMwise was developed in July - October 2021 by the Application Security Services Team at Datacom New Zealand. 
                    The tool was released as an open-source project and donated to the OWASP SAMM project. 
                </p>
            </div>
        </>
        );
}
 
export default About;