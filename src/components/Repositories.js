import {useEffect, useState} from "react"
import styles from "./Repositories.module.css"

function Repositories({repoUserName}){
    const [repositories, setRepositories] = useState([])
    let [foundUsername, setFoundUsername] = useState(false)
    

    useEffect(()=>{
        fetch(`https://api.github.com/users/${repoUserName}/repos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then((data) => {
            setRepositories(data)
            setFoundUsername(true)
        })
        .catch(err => console.log(err))
    }, [repositories])

    if(foundUsername){
        return(
            <div className={styles.repositories}>
                { repositories && (
                    <ul>
                    {repositories.map((project)=>[
                        (<li>
                            <div>
                                {project.name}
                            </div>
                        </li>)
                    ])}
                    </ul>
                ) }
            </div>
        )
    } else{
        <div>erro</div>
    }

    
            
}
export default Repositories