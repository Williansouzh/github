import Perfil from "./Perfil"
import Button from "./Button"
import {useState, useEffect} from "react"
import Repositories from "./Repositories"

import SearchBar from './SearchBar';

function Dashboard() {
    const [userName, setUserName] = useState('')
    const UserUrl = `https://api.github.com/users/${userName}`
    const [perfil, setPerfil] = useState([])

    const searchUserName =(e)=>{
        setUserName(e.target.value)
        console.log(userName)
    }

    useEffect(()=>{
        fetch(`https://api.github.com/users/Williansouzh`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            } 
        }).then(response => response.json()).then(data =>{
            setPerfil(data)
        }).catch(err => console.log(err));
    }, [userName])
    return( 
        <div>
            <SearchBar value={(e)=>e.target.value} onChange={searchUserName}/>
            {perfil && (
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
            />)}
            <Button type="button" text="Repositories"/>
            <Button type="button" text="Starred"/>
            <Repositories />
        </div>
    )
}

export  default Dashboard