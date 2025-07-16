import NavigationBar from "./NavigationBar"
import { Outlet } from "react-router-dom"
/*Outlet renders all child routes, so can put Layout as parent route to all other routes (other pages*/
/*Make a page a child of Layout in App.jsx */
/*The four routes (pages) become the Outlet component (rendered by it) in main tags*/
/*render Outlet here so NavigationBar can exist outside of all other routes (don't have to import NavigationBar to pages, will just be there on every page)*/

export function Layout(){
    return(
        <>
            <NavigationBar/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}