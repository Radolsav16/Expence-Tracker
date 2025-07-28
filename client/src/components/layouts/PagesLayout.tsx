import React from "react"
import SideBar from "../sidebar/Sidebar"

const PagesLayout:React.FC<React.PropsWithChildren> = ({children}) =>{
    return(
        <>
            <SideBar />
            {children}
        </>
    )
}

export default PagesLayout