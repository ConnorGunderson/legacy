import React from 'react'
import {Image, Container, Grid, Header, Divider, Segment} from 'semantic-ui-react'
import {ResContainer} from './Globals'
import msu from '../images/msu.png'

const Overview = () =>{

    return (
        <section style={{padding: "40px",minHeight: "60%",textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column"}} >
            <Grid style={{height:"100%"}} centered>
                <Grid.Row verticalAlign="middle">
                    <Grid.Column textAlign="center" tablet={8} mobile={16} >
                        <Header as="h2" style={{fontSize: "48px"}}>
                            About Connor
                        </Header>
                        <p>
                            NodeJS Developer
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row >
                    <ResContainer  vAlign="middle">
                        <Container>
                            <Header as="h3" >
                                Profession
                            </Header>
                            <p >
                                I am a full stack web developer. I love to learn and stay on the forefront of web technology. I am constantly striving to deeper my understanding of full stack web development and become a reliable client for those in need of UI/UX, database design and anything else web related. I love working in teams and strive to encourage a creative and productive environment.
                            </p>

                        </Container>
                    </ResContainer>
                    <ResContainer vAlign="middle">
                        <Image
                            fluid
                            spaced
                            wrapped
                            src={msu}
                        />
                    </ResContainer>
                    <ResContainer vAlign="middle" ta="center">
                        <Container fluid text >
                            <Header as="h3">Details</Header>
                            <Segment basic>
                                <p className="MSU">Michigan State University</p>
                                <p>Media and Information Major</p>
                                <p>East Lansing, Michigan</p>
                                <p>22 Years Old</p>
                            </Segment>
                        </Container>
                    </ResContainer>
                </Grid.Row>
            </Grid>
        </section>
    )
}


export default( Overview)