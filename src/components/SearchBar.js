import styles from "./SearchBar.module.css"

function SearchBar({value, onChange}){


    return(
        <div className={styles.search_bar}>
            <input 
                type="text" 
                defaultValue={value}
                onChange={onChange} 
            >
            </input>
            <input 
                type="button"     
                value="search"></input>
        </div>
    )
}

export default SearchBar