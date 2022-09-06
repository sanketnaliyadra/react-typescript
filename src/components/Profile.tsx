import React from 'react'

type Iprofile = {
    name: string,
    count: number
}

const Profile = (props:Iprofile) => {
  return (
    <div>
        <h2>Hey {props.name} ! welcome you have {props.count} number of messages.</h2>
    </div>
  )
}

export default Profile