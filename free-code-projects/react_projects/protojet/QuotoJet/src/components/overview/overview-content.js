import React from 'react'
import {  Grid, } from 'semantic-ui-react'
import { PartOverall } from './overview_apps/part-overall'
import { Inserts } from './overview_apps/inserts'
import { EdmRib } from './overview_apps/edm-rib-areas'
import { UniMan } from './overview_apps/unitized-manifold'
import { SpecTools } from './overview_apps/special-tool-features'
import { Breakdown } from './overview_apps/breakdown'


export const OverviewContent = (props) => {
  return (
    <Grid columns={5} stretched centered id={props.id}>
      <Grid.Row >
        <Grid.Column columns={1} key={1}>
          <PartOverall />
        </Grid.Column>
        <Grid.Column key={2}>
            <Inserts />
            <EdmRib />
        </Grid.Column>
        <Grid.Column key={3}>
          <UniMan />
          <SpecTools />
        </Grid.Column>
        <Grid.Column width={6} key={4}>
          <Breakdown />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}