import {useEffect, useState} from "react"
import styles from "./Repositories.module.css"

function Repositories({UserName}){
    
    const [repositories, setRepositories] = useState([])
    let url = `https://api.github.com/users/Williansouzh/repos`

    useEffect(()=>{
        fetch(`https://api.github.com/users/Williansouzh/repos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => setRepositories(data))
        .catch(err => console.log(err))
    }, [])

    return(
        <div className={styles.repositories}>
            {
                <ul>
                {repositories.map((project)=>[
                    (<li>
                        <div>
                            {project.name}
                        </div>
                    </li>)
                ])}
            </ul>
            }
        </div>
    )
}
export default Repositories