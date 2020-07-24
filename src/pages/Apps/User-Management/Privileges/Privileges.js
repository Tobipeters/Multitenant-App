import React from 'react'
import AppHeader from '../../../../newComponents/GeneralLayout/appHeader'

class Privileges extends React.Component{
    // constructor (){
    //     super()
    // }

    render(){
        return (
            <div className="container">
                 <AppHeader
                title={"Privileges"}
                breadcrumbMain={"User Management"}
                breadcrumbSubMain={"Privileges"}
                allMenu={'setting-menu-for-each-page-comes-in-here'}
                />
            </div>
        )
    }

}

export default Privileges;