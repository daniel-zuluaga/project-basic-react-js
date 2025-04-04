import { useState } from 'react';

function TwitterFollowCard({children, formatUserName, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowingState] = useState(initialIsFollowing);
    const imageSrc = `https://unavatar.io/${userName}`;

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    console.log('[TwitterFollowCard] render with userName: ', userName)

    const handleClick = () => {
        setIsFollowingState(!isFollowing);
    }

    return (
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar' alt='El avatar de hola jajajja' src={imageSrc} />
          <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={() => {
            handleClick()
          }}>
            <span className='tw-followCard-text'>{text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
}

export { TwitterFollowCard };