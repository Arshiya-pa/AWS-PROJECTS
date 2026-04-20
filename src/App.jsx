import React from 'react'
import axios from 'axios'
import './App.css'
import { useState, useEffect} from 'react'


const App = () => {

   const [data,setData] = useState()

   useEffect(() => {
      axios.get('http://13.200.255.50/api/test')
      .then(response =>{
         console.log("Api response from backend",response.data)
         setData(response.data.message)
      })
       .catch(error =>{
         console.log("Error in api call :" , error)
       })
   },[])
    
return (
 <div className='page'>
    <h1 className='head'>Welcome to My application</h1>
     <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet error beatae nobis sequi aut, est quod ex harum perferendis alias enim, nam nisi. Magni, fugiat voluptates. Harum, fugiat obcaecati.
          Quibusdam officia officiis delectus veniam ad libero laudantium aliquam aliquid assumenda modi doloribus dolorem dignissimos dolores molestiae adipisci enim harum aut, soluta natus neque provident voluptate iste. Quia, voluptatum. Beatae?</p>
  <div className='btns'>
     <button>Explore More</button>
     <button>Connect Us</button>
    </div>
    <h2>From backend : {data}</h2>
  </div>
   )
}

export default App