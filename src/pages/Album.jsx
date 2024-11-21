import React, { useEffect, useState } from "react";
import classes from './album.module.css'
import { Outlet, useNavigate} from 'react-router-dom'

const Album = () => {
  const navigate=useNavigate();
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data = await response.json();

        const shortedArray = data.filter(
          (item) => item.albumId >= 1 && item.albumId <= 12
        );
        const groupedArray = shortedArray.reduce((acc, item) => {
          let albumId = item.albumId;
          if (acc[albumId]) {
            acc[albumId].push(item);
          } else {
            acc[albumId] = [item];
          }
          return acc;
        }, {});
        setApiData(groupedArray);
        setLoading(false)
      } catch (error) {}
    };
    fetchAlbum();
  }, []);

  console.log(apiData);
  let keys = Object.keys(apiData);

  const handleClick=(album,albumId)=>{

    
    navigate(`${albumId}`,{state:album});
  }


  return <>
    
      <div className={classes.container} >
        {loading ? <p style={{textAlign:'center'}}>Data is Loading...</p> : <>
        {keys?.map(item => {
          let random1 = Math.floor(Math.random()*50)
          let random2 = Math.floor(Math.random()*50)
          let random3 = Math.floor(Math.random()*50)
          let random4 = Math.floor(Math.random()*50)
          return(
            <section className={classes.mainsection}  key={item}>
              <section className={classes.imagesection}>
              <img src={apiData[item][random1].thumbnailUrl} alt=""/>
              <img src={apiData[item][random2].thumbnailUrl} alt=""/>
              <img src={apiData[item][random3].thumbnailUrl} alt=""/>
              <img src={apiData[item][random4].thumbnailUrl} alt=""/>
              </section>
              
              <p>ALBUM {item}</p>
              <button onClick={()=> handleClick(apiData[item],item)}>Get Details</button>
            </section>
          )
        })}
        </>}
      

      </div>
      
  </>;
};

export default Album;
