import styles from '../../styles/buttons.module.css'





const SurveyButton = (props) => {
   
    return ( 
     
            <button className = {styles.surveyButton} id={props.id} onClick={()=> props.onClick(!props.state)}>{props.name}</button>
   
     );
}
 
export default SurveyButton;