import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App(){
    const formatUserName = (userName) => `@${userName}` 
    //const formatimage = (imglink) => '@${imglink}'
    //const formattedUsername = (<span>@clopez</span>)
    //console.log('Hola'+formatUserName)
   
   const arra = [
    {
        userName: 'Pedrin',
        name: 'Pedro Cifuentes',
        isFollowing: true
    },
    {
        userName: 'Carlos',
        name: 'Carlos Rodriguez',
        isFollowing: true
    },
    {
        userName: 'Alfonso',
        name: 'Alfonso Perez',
        isFollowing: false
    }
   ]
   
   
   
    return(
    <section className='App'>
    
    <TwitterFollowCard
    formatUserName={formatUserName} 
    initialIsFollowing={true} 
    userName="Lopez7" 
    name="Clopez"
    imglink= "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png" />

    <TwitterFollowCard 
    formatUserName={formatUserName} 
    initialIsFollowing={false}  
    userName="Lopez" 
    name="David" 
    imglink= "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"/>

    <TwitterFollowCard 
    formatUserName={formatUserName}
    initialIsFollowing={false} 
    userName="Cami" 
    name="Camila"
    imglink= "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png" />

    <TwitterFollowCard 
    Vinicius Junior 
    formatUserName={formatUserName} 
    //userName="Felipe"
    initialIsFollowing={true}  
    name="Feli"
    imglink= "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"/>

    <TwitterFollowCard> 
        Cristian David Lopez Vargas 
    </TwitterFollowCard> 

    <TwitterFollowCard userName="@ViniJr" > 
       Vinicius Junior
    </TwitterFollowCard> 

    {
        arra.map(arras =>{
            const {userName,name,isFollowing} = arras
            return(
                <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
                >{name}
                </TwitterFollowCard>
            )
        })
    }   


    </section>
    
   )
}