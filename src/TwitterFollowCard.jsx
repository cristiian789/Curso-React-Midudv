import './App.css'

export function TwitterFollowCard({children, userName = 'Sininfo', name, isFollowing, imglink}){
    //const formatUserName = (username) => '@${userName}'
    //const formatimage = (imglink) => '@${imglink}'
    //console.log(isFollowing)
        
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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}