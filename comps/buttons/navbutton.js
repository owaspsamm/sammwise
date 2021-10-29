//Button component for future use..

import styles from '../../styles/navbar.module.css'





const NavButton = (props) => {
   
    return ( 
        <div className = {styles.grouping}>
            <button className = {props.state? styles.pageButtonsActive:styles.pageButtons} onClick={(event)=> props.onClick(event.target)}></button>
            <label className = {styles.pageLabel}>{props.name}</label>
        </div>
     );
}
 
export default NavButton;