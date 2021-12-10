import React from 'react'
import { Container, Icon, Image, Divider, Grid, Header } from 'semantic-ui-react'
import factory from '../images/factory.png'

const Projects = () => {
    return (
        <Container fluid id="projects" style={{display: "flex"}} >
            <Grid style={{padding:20, width: "90%", margin: "auto"}}>
                <Grid.Row verticalAlign="middle" centered> 
                    <Grid.Column  textAlign="center" tablet={8} mobile={16} >
                        <Header as="h2" style={{fontSize: "32px"}}>
                            Projects
                        </Header>
                        <Divider />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2} stretched verticalAlign="middle" centered textAlign="center">
                    <Grid.Column verticalAlign="middle"   widescreen={8} largeScreen={8} computer={8}  tablet={8} mobile={16}>
                        <h3 style={{color:"black"}}>Quotojet</h3>
                        <div>
                            <Image
                                bordered
                                href="http://quotojet.com"
                                target="_blank"
                                id="quotojet"
                                fluid
                                rounded
                                src={factory}
                            />
                        </div>
                        <aside style={{color: "black"}}>
                            Credit: Ant Rozetsky
                        </aside>
                    </Grid.Column>
                    <Grid.Column style={{color: "black"}}   widescreen={8} largeScreen={8} computer={8}  tablet={8} mobile={16}>
                        <Divider />
                        <p>
                            This is my biggest project that I have done. This is a skeleton of the web app I made for a client that needed a quoting system for their business. main technologies used were React/Redux with an express backend hosted on a EC2 AWS instance in tandem with DynamoDB. The purpose of this app was to simplify the workflow of quoting parts for customers and store company specific data in a persistent database.
                        </p>
                        <code>Link to Github</code>
                        <a href="https://github.com/ConnorGunderson/QuotoJet" rel="noreferrer" target="_blank">
                            <Icon 
                                name="github" 
                                size="big" 
                                style={{padding:10}}
                                link={true}
                            />
                        </a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Projects;