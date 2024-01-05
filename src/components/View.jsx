import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videocard from './Videocard';
import { getAllvideos } from '../Services/allAPI';


function View({uploadVideostatus}) {
  const [allVideo, setAllVideo]=useState([])
  const [deleteVideostatus,setdeletevideostatus]=useState(false)
  const getAllUploadedVideos = async()=>{
    const response = await  getAllvideos();
   // console.log(response);
    const {data} = response;
    setAllVideo(data)
    
  }
  useEffect(()=>{
    getAllUploadedVideos();
    setdeletevideostatus(false)

},[uploadVideostatus,deleteVideostatus])
  console.log("==All Videos==");
    console.log(allVideo)
    return (
        <>
        <Row>
          {
            allVideo?.length>0?
            allVideo.map((video)=>(
              <Col sm={12} md={6} lg={4} xl={4} className='m-5'>
              <Videocard displayVideo = {video} setdeletevideostatus={setdeletevideostatus}/>
              </Col>
            ))
            :
            <p>No Item To display</p>
              }
        </Row>
      </>
    )
}

export default View