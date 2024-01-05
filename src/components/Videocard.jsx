import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoHistory, deleteVideo } from '../Services/allAPI';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Videocard({displayVideo,setdeletevideostatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    //3 data need to be inserted 1) caption ,2)link ,3)timestamp
    const {caption,embededLink}=displayVideo;
    const today = new Date;
    console.log("====today===",today);
    let timestamp = new Intl.DateTimeFormat('en-us',{
      year:'numeric',
      month:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'

    }).format(today)
    console.log(timestamp);
    let videDetails={
      caption:caption,
      embededLink:embededLink,
      timestamp:timestamp
    

    }
    await addtoHistory(videDetails)

  }
 
  console.log("1");
  console.log(displayVideo);
  const removeVideo = async(id)=>{
    const response = await deleteVideo(id)
    setdeletevideostatus(true)
  }
  return (
    <>
      <Card style={{ width: '13rem'}}  onClick={handleShow}>
      <Card.Img variant="top" height='250px'width='80%'  src={displayVideo.url} />
      <Card.Body>
       <div className='d-flex align-items-center justify-content-evenly'>
        <h6>Video Caption</h6>
        <Button variant="danger" className='ms-3' onClick={()=>removeVideo(displayVideo.id)}>
        <i class="fa-solid fa-trash"></i>
        </Button>
       </div>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="515"  src={`${displayVideo.embededLink}?autoplay=1`}
        title="How to speed up your React Development skills ? Learn How To Build React Apps Quickly ?" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
    
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard