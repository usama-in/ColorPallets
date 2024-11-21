import React from 'react'
import { useLocation,Link } from 'react-router-dom'
import classes from './singlealbum.module.css'
import { useParams } from 'react-router-dom'


const singleAlbum = () => {
  const params =useParams()
  const location=useLocation();
  const album = location.state || []
  console.log(album)

  const handleClick=(item)=>{
    console.log(item)
  }
  
  return (
   <div className={classes.container}>
    <button><Link to='..' relative='path'>Back to Albums</Link> </button>
    <h3>You are currently Viewing Album {params.albumId}</h3>
    <div className={classes.main}>
    
    {album?.map(item => (
       <section>
        <img src={item.thumbnailUrl} alt="" />
      <p>{item.title}</p>
      <button onClick={()=> handleClick(item)}>Click to View</button>
    </section>
      ))}
    </div>
    
      

   </div>
  )
}

export default singleAlbum