import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='d-flex justify-content-center alig-items-center mt-5'>
      <div className='footer d-flex align-item-center justfy-content-evenly'>
        <div className='website'style={{width:"400px"}}>
         <h5><i class="fa-solid fa-video text-warning me-3"></i>Media Player</h5>
           <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas assumenda mollitia minus soluta optio eveniet aut tenetur qui, dolores, sed saepe quasi voluptatibus doloribus pariatur itaque? Eos beatae iusto voluptatibus.</p>
        </div>
       <div className='link d-flex flex-column ms-5'>
      <h4>links</h4>
     <Link to='/' style={{textDecoration:"none",color:'white'}}>Landing page</Link>
    
    <Link to='/home' style={{textDecoration:"none",color:'white'}}>Home page</Link>
  
    <Link to='/watch' style={{textDecoration:"none",color:'white'}}>Watch History</Link>
      
    </div>
    
    <div className='guides d-flex flex-column ms-5'>
        <h4>Guides</h4>
      <Link to='https://react.dev/' target='_blank' style={{textDecoration:"none",color:'white'}}>React</Link>

      <Link to='https://react-bootstrap.netlify.app/' style={{textDecoration:"none",color:'white'}}>React Bootstrap</Link>

      <Link to='https://bootswatch.com/' style={{textDecoration:"none",color:'white'}}>Boots watch</Link>
      
        </div>
      
      <div className='contactus ms-5'>
        <h4>CONTACT US</h4>
        <div className='d-flex'>
          <input type="text"  className='form-control' placeholder='Enter your email'/>

          <button className='btn btn-warning ms-2'>subscribe</button>

        </div>
         <div className='d-flex justify-content-evenly   align-items-center mt-4'>
         <Link><i class="fa-brands fa-instagram fa-fade fa-2x" style={{color:"orange"}}></i></Link>
         <Link><i class="fa-brands fa-facebook fa-fade fa-2x" style={{color:"orange"}}></i></Link>
         <Link><i class="fa-brands fa-twitter fa-fade fa-2x" style={{color:"orange"}}></i></Link>
         <Link><i class="fa-brands fa-linkedin-in fa-fade fa-2x" style={{color:"orange"}}></i></Link>
       </div> 
      </div>
      </div>
       </div> 
    <p className='mt-5 text-center'>Copyright &copy; 2023 media player.Built with React</p>
    </>
  )
}

export default Footer 