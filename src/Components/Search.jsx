import React, { useRef } from 'react';

export const Search = ({fn}) => {
    const artist=useRef()

    const HandleKeyDown=(event)=>{
        if(event.key==='Enter'){
            fn(artist.current.value)
        }
    }

    return (
        <div className="container">
            <>
            <label>Artist Name</label>
            <div className="input-group mb-3">
                <input ref={artist} type="text" className="form-control" placeholder="Search Here" onKeyDown={HandleKeyDown} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={()=>{
                        fn(artist.current.value);
                    }}>Submit</button>
                </div>
            </div>
            </>
        </div>
    );
}
