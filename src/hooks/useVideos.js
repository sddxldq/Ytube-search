import React from 'react'
import {useState, useEffect} from 'react'
import youtube from '../api/youtube'


const useVideos = (firstchoice) => {
    const [videos, setvideos] = useState([])

    useEffect(() => {
        search(firstchoice)
    }, [])

    const search=async(term)=>{
        const response = await youtube.get("/search",{
          params:{
            q:term,
          }
        })
        // console.log(response.data.items);
        setvideos(response.data.items)
        // setvideoselected(response.data.items[0])
      }
    return [videos, search]
}

export default useVideos
