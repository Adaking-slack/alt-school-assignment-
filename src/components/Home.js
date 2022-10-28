import React from "react";
import HomeCSS from "./Home.module.css"
import { NavLink } from "react-router-dom";

export default function Home() {

    return (

        <div className={HomeCSS.body}>
            <div className={HomeCSS.intro}>
                <h1>Welcome to fetchMentor</h1>
                <p>You can get details of all the mentors avilable from fetchMentor</p>
                
                <NavLink to='/User'>Get all mentors</NavLink>
</div>
        </div>


    )
}