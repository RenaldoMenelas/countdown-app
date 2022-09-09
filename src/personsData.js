import React from 'react'
import './personsData.css'
import CountdownTimer from './countdownTimer'
import { useState } from 'react'


function PersonsData({data,setData}) {

   
    const handleSubmit = (event) => {
        window.document.body.style.zoom = 1
        event.preventDefault();
        //console.log(`${data.firstName} ${data.lastName} bithday is on ${data.birthDate}`)
        
        setData({
            ...data,
            
            submitted:true,
            
           
        });
       

      //  console.log(event.target.value)
        
        
        //setData({submitted: true})  
    

    }
    

    const onChange = (event) => {
        const value = event.target.value; 
        const name = event.target.name
       
        setData({
            ...data,
            [event.target.name]: value,
            submitted:false
            
            
        });

        
        console.log(event.target.value)
        

    }


    return (
        <>
              
                <form onSubmit={handleSubmit}>
                <label> First Name:
                    <input
                        type="text"
                        name="firstName"
                       value={data.firstName}
                        onChange={onChange}
                        required
                        
                    />
                </label>

                <label> Last Name:
                 <input
                        name="lastName"
                        type="text"
                        value={data.lastName}
                        onChange={onChange}
                        
                        required />
                    </label>
                

                <label> Date of birth
                 <input
                        name="birthDate"
                        type="date"
                        value={data.birthDate}
                        onChange={onChange}
                        required />
                  </label>

                <label> Submit
                 <input type="submit"/>
                 </label>

                </form>
            
          
            
        </>
    )
}

export default PersonsData
