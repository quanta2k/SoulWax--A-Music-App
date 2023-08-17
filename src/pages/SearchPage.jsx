import { useEffect, useState } from "react"
import { Search } from "../Components/Search"
import { Songs } from "../Components/Songs"
import { getSongs } from "../services/api-client"
import { Player } from "../Components/Player"



export const SearchPage=()=>{
    const [allsongs,setSongs]=useState([])
    //component life cycle
    const [flag,setFlag]=useState(false)
    const [song,setPlayerSong]=useState(null)
    const loadSongs=async()=>{
        setSongs(await getSongs('Latest Songs'));
    }
    useEffect(()=>{
        loadSongs();
    },[])
    const togglePlayer=(flag,songarg )=>{
        console.log("We recieve",flag,'Song objext',songarg);
        setPlayerSong(songarg)
        setFlag(flag)
    }
    const getArtistName=async(artistName)=>{
        console.log("artist name is",artistName)
        setSongs(await getSongs(artistName));
    }
    const jsx=(<><Search fn={getArtistName}/>
    <Songs fn={togglePlayer} allsongs={allsongs} /></>);
    return(
        <div>
            <h1 className="text-center">SoulWax<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzC193ZmwpmECvFkH8M5l1SZu9bNFb4OY3w&usqp=CAU" style={{ marginLeft: '10px', width: '100px', verticalAlign: 'middle' }}alt="music icon"/></h1> 
            {flag?<Player fn={togglePlayer} song={song}/>:jsx}   
        </div>)  
}