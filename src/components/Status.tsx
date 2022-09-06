import React from 'react'

type Istatus = {
    status: 'loading' | 'success' | 'errors'
}

const Status = (props: Istatus) => {
    let message;
    if(props.status === "loading")
        message = "loading..."
        else if(props.status === "success")
        message = "success"
        else if(props.status === "errors")
        message = "errors"
  return (
    <div>
        <h3>message - {message}</h3>
    </div>
  )
}

export default Status