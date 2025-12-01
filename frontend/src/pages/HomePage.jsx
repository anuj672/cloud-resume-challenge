import React from 'react';
import 'css/pages/home.css';
import cover from 'images/cover.jpg';


export default function HomePage() {
  return (
    <>
        <div className ="home-photo">
            <img src={cover} /> 
        </div>
    </>
    )
}