import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const User = () => {

    const [user,setUser] = useState(null)

    



    useEffect(()=>{

        fetch('http://localhost:3000/user')
        .then(res => res.json())
        .then(data =>setUser(data))

    },[user])

        const handleUser = (e)=>{
       e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;

        const user = {name,email}
            fetch('http://localhost:3000/user',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                setUser([...user, data])
            })
        
    }

    return (
        <div>


            <form onSubmit={handleUser}>
                <input type="text" name="name" placeholder='Name' id="" />
                <br />
                <input type="email" name="email" placeholder='email' id="" />
                <br />
                <input type="submit" value="add user" />
                
            </form>
            
            {
                user?.map(data => <p key={data.id}>{data.name}: {data.email}</p>)
            }
        </div>
    );
};

export default User;