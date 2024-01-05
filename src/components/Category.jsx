import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addcategory, deletecategory } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.min.css'; 
import { getAllcategory } from '../Services/allAPI';
import { Await } from 'react-router-dom';

function Category() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [CategoryName,setcategoryName] = useState()
    const [allcategory,setallcategory]= useState([])
    console.log("===category name=====",CategoryName);
    const handleAddcategory = async ()=>{
      if(CategoryName){
      let body ={
        CategoryName:CategoryName,
        allVideos:[]
      }
      const response = await addcategory(body);
      if(response.status == 201){
      toast.success(`successful  added the category ${CategoryName}`)
      setcategoryName("")
        handleClose();
        getAllcate();
      }
      else{
        toast.error("something went wrong")
      }
    }
    else{
      toast.warn("please enter a category name")
    }
  }
  const getAllcate = async()=>{
    const response = await getAllcategory();
    const {data}= response
    console.log("====all category===");
    console.log(response);
    setallcategory(data)
    
  }
  useEffect(()=>{
    getAllcate();
  },[])
  const handleDelete = async(id)=>{
   await deletecategory(id);
    getAllcate();
  }
  return (
    <>
    <div>
      <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
    </div>
    <div className=' ms-1 '>
      {
        allcategory.length>0?
        allcategory.map(item =>(
          <div className='m-5 border border-secondary rounded p-3'>
          <div className='d-flex justify-content-between align-item-center'>
            <h6>{item.CategoryName}</h6>
            <button className='btn btn-danger  ms-3'onClick={()=>handleDelete(item.id)}>
            <i class="fa-solid fa-trash "></i> 
            </button>
          </div>
        </div>

        )):
       
      <p>no categoryies to display</p>
      }
     
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
          <i class="fa-solid fa-list text-warning me-3"></i>
          Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the form</p>
         <Form className='border border-secondary p-3 rounded'>
      

           <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setcategoryName(e.target.value)} />
         </Form.Group>

    
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" className='btn-warning' onClick={handleAddcategory}>ADD</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} theme='colored' > 
     </ToastContainer>  
    
    </>
  )
}

export default Category