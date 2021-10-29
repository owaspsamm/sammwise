
import styles from '../../styles/buttons.module.css'
import Image from 'next/image'
import { useState } from 'react';





const DropButton = (props) => {
    

    return ( 
        <a className = {styles.dropDown} onClick={()=> props.onClick(!props.state)}> 
            <span className = {styles.dropDownText}><span>{props.name}</span></span>
            <span className = {styles.dropDownImage}>
            <Image src={props.state?"/uparrow.png":"/downarrow.png"} width={50} height = {50}/>
        
            </span>
        </a>
     );
}
 
export default DropButton;