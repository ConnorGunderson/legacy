import React from 'react'
import { Icon, Divider, Grid, Header} from 'semantic-ui-react'
import {ResContainer} from './Globals'

const Socials = () => {
    return (
        <section id="socials" >
            <Grid style={{padding:20, width: "90%", margin: "0 auto"}} centered>
                <Grid.Row verticalAlign="middle" centered> 
                    <Grid.Column  textAlign="center" tablet={8} mobile={16} >
                        <Header as="h2" style={{color: "#fff",fontSize: "32px"}}>
                            Socials
                        </Header>
                        <Divider style={{borderColor: "white"}} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row id="socialTags">
                    <ResContainer ta="center">
                        <a href="https://github.com/ConnorGunderson" rel="noreferrer" target="_blank">
                            <Icon 
                                name="github square" 
                                size="huge" 
                                style={{padding:10}}
                                link={true}
                            />
                        </a>
                    </ResContainer>
                    <ResContainer ta="center">
                        <p>
                            I do not use Twitter/Facebook or any other social media platform.
                        </p>
                        <code>
                            Email: Gunder41@msu.edu
                        </code>
                        
                    </ResContainer>
                    <ResContainer ta="center">
                        <a href="https://www.linkedin.com/in/connor-gunderson-314624171/" rel="noreferrer" target="_blank">
                            <Icon 
                                name="linkedin" 
                                size="huge" 
                                style={{padding:10}}
                                link={true}
                            />
                        </a>
                    </ResContainer>
                </Grid.Row>
                <code>
                    Link to this website's github: <i><a href="https://github.com/ConnorGunderson/mi349_final" rel="noreferrer" target="_blank" style={{color: "white", }}>Here</a></i>
                </code>
            </Grid>
        </section>

    )
}

export default Socials;