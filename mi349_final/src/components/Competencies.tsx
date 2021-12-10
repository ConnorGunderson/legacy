import React from 'react'
import { Header, Grid, List, Divider, Rating } from 'semantic-ui-react';


const Competencies = () => {
    return (
        <section id="competencies" >
            <Grid style={{padding:20, width: "90%", margin: "0 auto"}}>
                <Grid.Row verticalAlign="middle" centered> 
                    <Grid.Column  textAlign="center" tablet={8} mobile={16} >
                        <Header as="h2" style={{color: "#fff",fontSize: "48px"}}>
                            Abilities
                        </Header>
                        <p>
                            Technologies and Competencies
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Divider style={{borderColor:"white"}}/>
                <Grid.Row columns={2} centered textAlign="center" style={{padding: "20px"}}>
                    <Header as="h2" style={{color: "#fff", textAlign: "left"}}>
                        Skills
                    </Header>
                    <Grid.Column widescreen={8} computer={8} largeScreen={8} tablet={8}  mobile={16}>
                        <List id="compList">
                            <List.Item>HTML(5) <R d={5}></R></List.Item>
                            <List.Item>CSS(3) and Sass/Scss <R d={5}></R></List.Item>
                            <List.Item>Javascript ES6/ES7 <R d={5}></R></List.Item>
                            <List.Item>JSON <R d={5}></R></List.Item>
                            <List.Item>Document Object Model <R d={5}></R></List.Item>
                            <List.Item>Bootstrap/Material/Semantic <R d={5}></R></List.Item>
                            <List.Item>noSQL/MongoDB <R d={5}></R></List.Item>
                            <List.Item>Rest API's <R d={5}></R></List.Item>
                            <List.Item>Object Oriented Programming <R d={4}></R></List.Item>
                            <List.Item>Functional Programming <R d={4}></R></List.Item>
                            <List.Item>NodeJS <R d={4}></R></List.Item>
                            <List.Item>React JS/Native and JSX <R d={4}></R></List.Item>
                            <List.Item>Redux <R d={4}></R></List.Item>
                            <List.Item>Typescript <R d={4}></R></List.Item>
                            <List.Item>SQL/Postgres <R d={4}></R></List.Item>
                            <List.Item>Command Line Interface (Bash)<R d={4}></R></List.Item>
                            <List.Item>MVC Pattern <R d={4}></R></List.Item>
                            <List.Item>GraphQL and SDL <R d={4}></R></List.Item>
                            <List.Item>ORM and ODM API's<R d={4}></R></List.Item>
                            <List.Item>Authentication with JWT<R d={4}></R></List.Item>
                            <List.Item>AWS and Web Hosting<R d={4}></R></List.Item>
                            <List.Item>SEO <R d={4}></R></List.Item>
                            <List.Item>Git<R d={4}></R></List.Item>
                            <List.Item>and many many more</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column widescreen={8} computer={8} largeScreen={8} tablet={8}  mobile={16} >
                        <Divider style={{borderColor: "white"}}/>
                        <Header as="h2" style={{color: "#fff", textAlign: "left", paddingTop: 10}}>
                            Workflow
                        </Header>
                        <p>
                            I mainly use the MERN (Mongo, Express, React, NodeJS) stack because these technologies are very lightweight and I am very comfortable with the mongodb document database model. I am also comfortable with relational databases and using ORM's in order to create an API for the client to interface with such as PG/Postgraphile with postgres and graphQL but the projects I have done up until now did not need anything too complex. I am confident in my knowledge in programming paradigms and programming theory in general. I have a good grasp on how javascript and associated technologies work under the hood and what methods can be used to improve performance and ease of use for the end user. I understand the importance of clean code, good comments with jsDoc, testing, and typing variables/parameters. I strive to make my code readable and easy to build on top of by team members. I correctly modulate my application into components that are encapsulated from the rest of the filesystem. I take criticism very well and am always happy to help a team member.
                        </p>
                        <Divider style={{borderColor: "white"}}/>
                        <Header as="h2" style={{color: "#fff", textAlign: "left", paddingTop: 10}}>
                            What I am working on
                        </Header>
                        <List id="compList">
                            <List.Item>Unit and E2E Testing with Puppeteer & Jest</List.Item>
                            <List.Item>Microservices</List.Item>
                            <List.Item>Web Optimization and SEO</List.Item>
                            <List.Item>WebGL and JS graphics</List.Item>
                            <List.Item>Server Side Rendering</List.Item>
                            <List.Item>Containers with Docker</List.Item>
                            <List.Item>Data Visualization</List.Item>
                            <List.Item>DevOps CI/CD</List.Item>
                            <List.Item>Linux Architecture and CLI mastery</List.Item>
                            <List.Item>Database Design</List.Item>
                            <List.Item>.NET with C#</List.Item>
                            <List.Item>Python and data analytics</List.Item>
                            <List.Item>Java</List.Item>
                            <List.Item>Exploring Web Frameworks, NPM packages and gradually improving my overall understanding of the web</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    )
}

const R = ({d}: any) => {
    return (
        <Rating icon="star" style={{float: "right"}} disabled defaultRating={d} maxRating={5}/>
    )
}

export default Competencies;