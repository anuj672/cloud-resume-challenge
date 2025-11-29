import React from 'react';


export default function ResumeHeader({ props }) {
  return ( 
        <section className="header">
            <h1>{ props.name }</h1>
            <p>
                <span className="location">{ props.location }</span>
                <span className="bull">&bull;</span>
                <span className="email"><a href="mailto:{ props.email }">{ props.email }</a></span>
                <span className="bull">&bull;</span>
                <span className="phone">{ props.phone }</span>
            </p>
        </section>     
  );
}
