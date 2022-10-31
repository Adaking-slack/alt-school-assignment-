import React, { useEffect, useState, } from "react";
import axios from "axios";
import userCSS from './User.module.css';
import UserSideBar from "./userSideBar";


export default function User(){
    const [user, setUser] = useState([]);
    const [loading, setLoading] = React.useState(true)
    useEffect(()=>{

     const fetchUser = () =>{
        axios.get('https://randomuser.me/api/?results=100')
        .then(response =>{
            setUser(response.data.results)
            console.log(response.data.results)
        })
        .catch(error =>{
            console.log({error})
        })

        .finally(() => {
        setLoading(false);
                         })
     }

            fetchUser()
        }, 
        
        
        []);
        if (loading) return "loading..";
console.log(user)

        return(
            <>
            <UserSideBar />
          {user.map((item, index) =>{
              const { picture, gender, name, location, email, phone } = item
              return (

                  <div key={index} >
                      <div className={userCSS.body}>
                          <div id="userProfile" className={userCSS.details}>
                              <ul className={userCSS.mentors} >
                                  <div>
                                      <img src={picture.large} />
                                  </div>
                                  <div className={userCSS.text}>
                                      <li className={userCSS.textName}>Name : {name.title}, {name.first} {name.last}</li>
                                      <li className={userCSS.location}>Location: {location.city}</li>
                                      <li>Gender:  {gender}</li>
                                      <li> Email: {email}</li>
                                      <li>Phone: {phone}</li>
                                  </div>
                             

                            
                             <a href="#" className="btn-link"><button>See More</button></a> 
                           </ul>
                          </div>
                      </div>
                  </div>
              )
          })}
        </>
    )
}


// export default  function User (){
  

  

  
//         const [data, setData] = React.useState(null);
//         const [loading, setLoading] = React.useState(true)
//         const [error, setError] = React.useState(null)
  
//         useEffect(() => {
//             axios('https://randomuser.me/api/')
//                 .then(response => {
//                     setData(response.data)
//                 })
//                 .catch(error => {
//                     console.error("Error fetching data: ", error);
//                     setError(error);
//                 })
//                 .finally(() => {
//                     setLoading(false);
//                 })
//         }, [])
  
//         if (loading) return "loading..";
//         if (error) return "error ";
    
    
//         return (
//             <>
//                 <ul>
//                     {
//                         this.state.users.map(user => <li key={user.id}>{data}</li>)
//                     }
//                     console.log(users)
//                 </ul>
//             </>
//         )
//               
