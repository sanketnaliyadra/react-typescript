import React, { useState } from 'react'

type Iuser = {
    name: string,
    email: string
}

const LoggedIn = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState<Iuser | null>(null)

    const handleLogin = () => {
        setIsLogin(true)
        setUser({
            name: "sanket",
            email: "sss@email.com"
        })
    }
    const handleLogout = () => {
        setIsLogin(false)
    }
  return (
    
    <div>
        <button onClick={handleLogin}>log in</button>
        <button onClick={handleLogout}>log out</button>
        <div>user is {isLogin ? 'logged in' : 'logged out'}</div>
        <h2>name of the user is {user?.name} and email is {user?.email}</h2>
    </div>
  )
}

export default LoggedIn