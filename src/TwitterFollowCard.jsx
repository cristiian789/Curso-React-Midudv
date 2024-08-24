import './App.css'
import { useState } from 'react'


export function TwitterFollowCard({children, userName = 'Sininfo', initialIsFollowing, name, imglink}){
    const[isFollowing, setisFollowing] = useState(initialIsFollowing) 

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing  ? 
    'tw-followCard-button is-following' :
    'tw-followCard-button'
    //Crear estado - arreglo de dos posiciones el valor y el activador o interrutor para cambiar el estado
    
    const  handleClick = () =>{
        setisFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
           {/* <img className='tw-followCard-img' alt="Avatar" src={'https://unavatar.io/gravatar/${userName}'} /> */}
               <img className='tw-followCard-img' alt="Avatar" src={imglink} /> 
                <div className='tw-followCard-div'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-span'>{userName}</span>
                </div>
            </header>  
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span> 
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}