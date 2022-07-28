import Perfil from "./Perfil"
import Button from "./Button"
import {useState, useEffect} from "react"
import Repositories from "./Repositories"

import SearchBar from './SearchBar';

function Dashboard() {
    const [userName, setUserName] = useState("")
    let [foundUsername, setFoundUsername] = useState(false)
    const [perfil, setPerfil] = useState([])

    const searchUserName =(e)=>{
        setUserName(e.target.value)
    }

    useEffect(()=>{
        fetch(`https://api.github.com/users/${userName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            } 
        }).then(response => response.json()).then(data =>{
            setPerfil(data)
            setFoundUsername(true)
            console.log(data.message)
        }).catch((err) => {
            setFoundUsername(false)
            console.log(err)
        });
    }, [userName])
    
    
    if(foundUsername=true){
        return( 
            <div>
                <SearchBar value={(e)=>e.target.value} onChange={searchUserName}/>
                
                <Perfil
                    avatar={perfil.avatar_url}
                    login={perfil.login}
                    company = {perfil.company}
                    location = {perfil.location}
                    blog = {perfil.blog}
                    folowings ={perfil.following}
                    followers= {perfil.followers}
                    gists = {perfil.public_gists}
                    repos = {perfil.public_repos}
                />
                <Button type="button" text="Repositories"/>
                <Button type="button" text="Starred"/>
                <Repositories repoUserName = {userName}/>
            </div>
        )
    } else{
        return(
            <SearchBar value={(e)=>e.target.value} onChange={searchUserName}/>
        )
    }
}

export  default Dashboard