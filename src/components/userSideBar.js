import UserSideBarCSS from './User.module.css';

export default function UserSideBar(){

    return(
        // <div className={UserSideBarCSS.UserBar}>
        //     <form method="post">
        //         <button type="submit">new</button>

        //     </form>
        <div>
          <div className={UserSideBarCSS.formSide}>
            <form id="search-form" role="search">
                <input
                type="text"
                aria-label="Search"
                placeholder="Search Mentor"
                className={UserSideBarCSS.formSideBar}
              ></input>
            </form>
            </div>
        </div>
    )
}