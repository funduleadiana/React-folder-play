import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserPage(props){
    //setting initial state
    const initialUserState = {
        user: {},
        loading: true,
      }
      const [user, setUser] = useState(initialUserState);

    //We can use effect to retrieve data from APi similar to using Component Did Mount in a class
    useEffect(()=>{
        const getUser = async ()=> {
            //passing the param (id) tot he API call
            const {data} = await axios(`https://api.github.com/users/${props.match.params.id}`)

            //Update State
            setUser(data)
        }
        //call the async function
        getUser()
    }, [])//Add [] to avoid UseEffect run in a continuous loop
    //return some data
    return user.loading? (
        <div>Loading...Please wait</div>
    ) : (
        <div className="container">
      <h1>{props.match.params.id}</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>{user.followers}</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}