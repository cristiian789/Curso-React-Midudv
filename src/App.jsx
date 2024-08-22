import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    const formatUserName = (userName) => `@${userName}` 
    //const formatimage = (imglink) => '@${imglink}'
    //const formattedUsername = (<span>@clopez</span>)
    //console.log('Hola'+formatUserName)
   return(
    <section className='App'>
    
    <TwitterFollowCard
    formatUserName={formatUserName} 
    isFollowing 
    userName="Lopez7" 
    name="Clopez"
    imglink= "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png" />

    <TwitterFollowCard 
    formatUserName={formatUserName} 
    isFollowing={false} 
    userName="Lopez" 
    name="David" 
    imglink= "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"/>

    <TwitterFollowCard 
    formatUserName={formatUserName}
    isFollowing 
    userName="Cami" 
    name="Camila"
    imglink= "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png" />

    <TwitterFollowCard 
    Vinicius Junior 
    formatUserName={formatUserName} 
    //userName="Felipe" 
    name="Feli"
    imglink= "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"/>

    <TwitterFollowCard> 
        Cristian David Lopez Vargas 
    </TwitterFollowCard> 

    <TwitterFollowCard userName="@ViniJr" > 
       Vinicius Junior
    </TwitterFollowCard> 

    </section>
    
   )
}