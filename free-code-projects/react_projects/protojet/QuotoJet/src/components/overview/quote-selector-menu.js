import React, { Component, useEffect, useState } from 'react'
import { act } from 'react-dom/test-utils'
import { Menu } from 'semantic-ui-react'

export const QuoteSelectionMenu = () => {
  const [ activeItem, setActiveItem ] = useState('EDMRibAreas')

  const handleItemClick =  (e) => {setActiveItem(e.target.innerText)}
  
  return (
      <Menu text>
        <Menu.Item
          name='Part Overall'
          active={activeItem === 'Part Overall'}
          onClick={handleItemClick}

        />
        <Menu.Item
          name='Inserts'
          active={activeItem === 'Inserts'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='EDM Rib Areas'
          active={activeItem === 'EDM Rib Areas'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Special Tools'
          active={activeItem === 'Special Tools'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Unitized Manifold'
          active={activeItem === 'Unitized Manifold'}
          onClick={handleItemClick}
        />
      </Menu>
  )
}

