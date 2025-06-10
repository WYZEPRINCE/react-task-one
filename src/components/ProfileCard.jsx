import React from 'react' 

const ProfileCard = (props) => {
  return (
    <div className='profile-card'>
        <img src={props.picture} alt={props.name} className="profile-picture" />
        <div className='profile-info'>
            <h2 className='profile-name'>{props.name}</h2>
            <p className='profile-bio'>{props.bio}</p>
        </div>
        <button
        onClick={() =>
          window.open(props.portfolioLink, "_blank")
        }
      >
        View My Portfolio
      </button>
    </div>
    
  )
}

export default ProfileCard