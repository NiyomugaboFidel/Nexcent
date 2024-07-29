import React from 'react'
import Unlock from './Unlock'
import Achievements from './Achievements'
import Calender from './Calender'
import Customers from './Customers'
import CommunityUp from './CommunityUp'


const Body:React.FC =  () =>{
  return (
   <section id='features' >
      <div>
        <Unlock />
        <Achievements />
        <Calender />
        <Customers />
        <CommunityUp />
    </div>
   </section>
  )
}

export default Body