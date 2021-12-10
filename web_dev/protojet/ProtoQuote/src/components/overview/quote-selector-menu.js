import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export class QuoteSelectionMenu extends Component {
  state = { activeItem: 'EDMRibAreas' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
        <Menu text>
          <Menu.Item
            name='EDM Rib Areas'
            active={activeItem === 'EDM Rib Areas'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Part Overall'
            active={activeItem === 'Part Overall'}
            onClick={this.handleItemClick}

          />
          <Menu.Item
            name='Special Tools'
            active={activeItem === 'Special Tools'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Unitized Manifold'
            active={activeItem === 'Unitized Manifold'}
            onClick={this.handleItemClick}
          />
        </Menu>
    )
  }
}

