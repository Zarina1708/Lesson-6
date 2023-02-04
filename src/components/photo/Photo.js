import React from 'react';
import {Link} from "react-router-dom";

import {useDispatch} from "react-redux";

import { itemAction } from '../../redux/actions';







export default function Photo({photoInfo}) {
    
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(itemAction(id))
    }

    

    return <div style={{width: '200px'}}>
        <br/>
        <img src={photoInfo.url} alt="#" style={{width: '200px'}}/>

        <h2>{photoInfo.title}</h2>

        <Link to={`/${photoInfo.id}`} onClick={() => handleClick(photoInfo.id)} style={{padding: '5px', borderRadius: '10px', textDecoration: 'none', background: 'black', color: 'white'}}>Open</Link>
        
        <hr/>
        <br/>

        
    </div>
}