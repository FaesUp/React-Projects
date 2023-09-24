import { useState } from 'react'

export function TwitterFollowCard ( {children, userName = "sinnombre"} ) {
    
    const [isFollowing, setIsFollowing] = useState(false) 
    
    // Se puede argumentar de otra forma
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]

    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                src={imageSrc}
                alt={"Avatar de ${userName}"} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong> {/* uso de children en el promp */}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>

        </article>
    )
}