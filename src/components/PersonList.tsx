import React from 'react'

type IpersonList = {
    personList : {
        name: string,
        age: number
    }[]
}
const PersonList = (props: IpersonList) => {
  return (
    <div>
        {props.personList.map((data:any)=> {
            return (
                <p>{data.name} {data.age}</p>
            )
        })}
    </div>
  )
}

export default PersonList