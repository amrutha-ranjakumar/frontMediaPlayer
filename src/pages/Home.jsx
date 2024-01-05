import React, { useState } from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import Videocard from '../components/Videocard'
import { useNavigate } from 'react-router-dom'

function Home() {
  //useNavigate():it is hook used to navigate from one to another
  const navigateByUrl =  useNavigate()
  // create a state for state lifting
  const [uploadVideostatus,setuploadevideostatus]=useState({})
  return (
  <>
  <div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
    <div className='add_video'>
      <Add setuploadevideostatus={setuploadevideostatus}/>
      </div>

      <div>
      <h3 style={{fontSize:"30px", cursor:"pointer"}} onClick={()=>navigateByUrl('/watch')}>Watch history</h3>

    </div>
  </div>
  <div className='container mt-5 mb-5 d-flex justify-content-between align-iten-center'>
    <div className='col-md-6 mt-5'>
      <h4>ALL Videos</h4>
      <View uploadVideostatus={uploadVideostatus}/>
    </div>
    <div>
     <Category/>
     
    </div>
  </div>
  </>
  )
}

export default Home