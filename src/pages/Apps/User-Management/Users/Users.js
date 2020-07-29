import React from 'react'
import AppHeader from '../../../Shared/appHeader'

class Users extends React.Component{
    // constructor (){
    //     super()
    // }

    render(){
        return (
            <div className="container">
                 <AppHeader
                title={"Users"}
                breadcrumbMain={"User Management"}
                breadcrumbSubMain={"Users"}
                allMenu={'setting-menu-for-each-page-comes-in-here'}
                />
            </div>
        )
    }

}

export default Users;