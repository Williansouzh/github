import styles from "./Button.module.css"

function Button({type, text}){
    return(
        <input className={styles.button} type={type} value={text}></input>
    )
}

export default Button 