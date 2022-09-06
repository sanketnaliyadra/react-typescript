import React from 'react'

type Iperson = {
    data: {
        fname: string,
        lname: string
    }
}
const Person = (props:Iperson) => {
    const {data} = props;
    console.log("props", props)
  return (
    <div>
        {data.fname} {data.lname}
    </div>
  )
}

export default Person