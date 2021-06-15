import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage
}) => {

        const handleAdd=(genre)=>{
            setSelectedGenres([...selectedGenres,genre]);
            setGenres(genres.filter((g)=>g.id !==genre.id));
            setPage(1);
        }

        const handleRemove=(genre)=>{
            setSelectedGenres(
                selectedGenres.filter((selected)=>selected.id !== genre.id));
            
            setGenres([...genres,genre]);
            setPage(1);
        };

    const fetchgenres=async()=>{
       const {data} =await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

       setGenres(data.genres);
    };
    console.log(genres);

    useEffect(() => {
        fetchgenres();
    
        return () => {
          setGenres({}); // unmounting
        };
        
        // eslint-disable-next-line
      }, []);

    return (
     
        <div style={{padding:'6px 0'}}>
             {selectedGenres&&
              selectedGenres.map((genre)=>(
                <Chip label={genre.name}
                style={{margin:2}}
                size='small' 
                color='primary'
                key={genre.id}
                clickable
                onDelete={()=>handleRemove(genre)}/>
            ))}
            { genres && genres.map((genre)=>(
                <Chip label={genre.name}
                style={{margin:2}}
                size='small' 
                key={genre.id}
                clickable
                onClick={()=>handleAdd(genre)}
                />
            ))}

        </div>
    )
}

export default Genres
