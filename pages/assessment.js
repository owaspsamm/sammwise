import React, { useState } from 'react'
import 'survey-react/survey.css';
import Head from 'next/head'
//local imports 
import Mysurvey from '../comps/surveyDisplay/surveyone'




export default function SAMMsurvey(){
    return(<>

            <Head>
                <title>SAMMWise | Assessment </title>
                <meta name = "keywords" content = "owassp-calc"/>
            </Head>
            <div>

            <Mysurvey/>   
            
            </div>
        </>)
};