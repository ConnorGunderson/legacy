import React from 'react'
import {Header, Icon} from 'semantic-ui-react'


const Banner = () => {
    return (
        <div id="banner">
            <Header as="h2" icon textAlign="center" >
                <Icon name="users" circular/>
                <Header.Content >
                    Connor Gunderson
                </Header.Content>
            </Header>
        </div>
    )
}

export default Banner;