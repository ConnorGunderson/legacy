import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { QuoteOverviewApp } from '../attached-menu/tabs/quote-overview-app'
import { EstimateApp } from '../attached-menu/tabs/estimate-app'
import { SettingsApp } from '../attached-menu/tabs/settings'
// import { CustomerInfo } from '../../overview/customer-information'

export class AttachedMenu extends Component {
  state = { activeItem: 'Estimates' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id={this.props.id}>
        <Menu attached='top' borderless >
          <Menu.Item
            name='Estimates'
            active={activeItem === 'Estimates'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Overview'
            active={activeItem === 'Overview'}
            onClick={this.handleItemClick}
            position='left'
          />
          <Menu.Item
            id='company'
            content={'COMPANY ' + 'Foo Company'}
          />
          <Menu.Item
            id='product'
            content={'PRODUCT_NAME ' + 'Adaptor whatever the hell'}
          />
          <Menu.Item
            id='total'
            content={'TOTAL ' + '$1,000'}
            position='right'
          />
          <Menu.Item
            name='Settings'
            active={activeItem === 'Settings'}
            onClick={this.handleItemClick}
            // position='right'
          />
        </Menu>
        <Segment attached='bottom' id='mainSegment'>
          {
              activeItem === 'Estimates'
            ? <EstimateApp id={'estimate'} />
            : activeItem === 'Overview' 
            ? <QuoteOverviewApp id={'quoteOverview'} />
            : <SettingsApp id={'settings'} />
          }
        </Segment>
      </div>
    )
  }
}
