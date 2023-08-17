
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, Card, CardContent, CardMedia, Typography,Grid,CardActions   } from '@mui/material';
import { useState } from 'react';

export const Song=({fn,song})=>{
    console.log(song);
    const [playerFlag,setPlayerFlag]=useState(false)
    const showPlayer=()=>{
        fn(true,song);
    }
    return (
        <Card className='container'>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <CardMedia component="img" height="140" image={song.artworkUrl100} alt={song.trackName} />
                </Grid>
                <Grid item xs={8}>
                    <CardContent>
                        <Typography variant="h6">{song.trackName}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {song.artistName}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={showPlayer} variant="contained" endIcon={<PlayArrowIcon />} color="error">
                            Play
                        </Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    );
};




