import React from 'react'
import AppHeader from '../../../Shared/appHeader'

class Roles extends React.Component{
    // constructor (){
    //     super()
    // }
    
    render(){
        return (
            <div className="container-fluid">
                 <AppHeader
                title={"Roles"}
                breadcrumbMain={"User Management"}
                breadcrumbSubMain={"Roles"}
                allMenu={'setting-menu-for-each-page-comes-in-here'}
                />
            </div>
        )
    }

}

export default Roles;