import { Outlet, NavLink } from "react-router-dom"
export default function SideBar() {

    return (
        <>
            
                <div id="sidebar">
             <div className="logo">
                    <h1>fetchMentor </h1>
</div>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to={`/home`}
                            //     className = {({})=>
                            // isActive ? "active": isPending ? "pending" : ""
                            // }
                                >Home</NavLink>
                            </li>

                            <li>
                                <NavLink to='/User'>Frontend Mentors</NavLink>
                            </li>

                            <li>
                                <NavLink to='/User'>Backend Mentors</NavLink>
                            </li>

                            <li>
                                <NavLink to='/User'>Cloud Mentors</NavLink>
                            </li>
                        </ul>

                    </nav>
                    <div>
                    </div>
                </div>
         
            <div id="details">
                <Outlet />
            </div>

        </>
    )
}