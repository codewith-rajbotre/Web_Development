import React from 'react'

function Card(props) {
    console.log("Props : ",props);
  return (
    
    <> 
         <h1>This is a card element <br /> Variable Channel :  {props.channel} <br /> My array elements:  {props.myArr}</h1>

         <h3> Object passed through props: {props.myObjs ? props.myObjs.myname : 'No object passed'}</h3>
    </>
  )
}

export default Card
