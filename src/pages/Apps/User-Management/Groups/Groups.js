import React from 'react'
import AppHeader from '../../../Shared/appHeader'

class Groups extends React.Component{ 
    // constructor (){
    //     super()
    // }

    render(){
        return (
            <div className="container-fluid">
                 <AppHeader
                title={"Groups"}
                breadcrumbMain={"User Management"}
                breadcrumbSubMain={"Groups"}
                allMenu={'setting-menu-for-each-page-comes-in-here'}
                />
            </div>
        )
    }

}

export default Groups;