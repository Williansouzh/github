import styles from "./Perfil.module.css"


function Perfil({login, company, location, blog, followers, folowings, gists, repos, avatar}){
    return(
        <div className={styles.perfil}>
            <div className={styles.profile_photo}>
                <img src={avatar} alt="perfil"></img>
            </div>
            <div className={styles.informations}>
                <h3>{login}</h3>
                <h3>{company}</h3>
                <h3>{location}</h3>
                <h3>{blog}</h3>
                <div className={styles.numbers}>
                    <div>
                        <h3>followers</h3>
                        <span>{followers}</span>
                    </div>
                    <div>
                        <h3>folowings</h3>
                        <span>{folowings}</span>
                    </div>
                    <div>
                        <h3>Gists</h3>
                        <span>{gists}</span>
                    </div>
                    <div>
                        <h3>Repos</h3>
                        <span>{repos}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil