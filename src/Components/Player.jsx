import { Button } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Player=({fn,song})=>{
    console.log("Song object received",song);
    return(
    <div>
        <Button startIcon={<ArrowBackIcon/>} variant="outlined" onClick={()=>{
            fn(false,null)
        }}>Back To Songs</Button>
        <p>Singer Name : {song?.artistName} <br /> Songame: {song?.trackName} <br/> <img src={song.artworkUrl100}/> </p>
        <br/>
        <audio controls>
        <source src={song?.previewUrl} type="audio/mp4"/>
        Your Browser Does Not Support Audio Element
    </audio>
    </div>)
}