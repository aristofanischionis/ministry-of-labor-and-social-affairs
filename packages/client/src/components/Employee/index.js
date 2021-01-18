import React, {useState} from 'react';
import {Grid, Image, Menu, Segment} from 'semantic-ui-react';
import employee from '../../images/employee.jpg';

// Complete the rest
export default function Employee() {
  const [activeItem, setActiveItem] = useState('κατι αλλο για εργαζομενους');
  const handleItemClick = (e, {name}) => setActiveItem(name);

  return (
    <Grid centered columns={2}>
      <Grid.Row style={{'background-color': '#e4efff'}}>
        <Image verticalAlign="middle" src={employee} size="medium" />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="κατι αλλο για εργαζομενους"
              active={activeItem === 'κατι αλλο για εργαζομενους'}
              onClick={handleItemClick}
            />
            <Menu.Item name="pics" active={activeItem === 'pics'} onClick={handleItemClick} />
            <Menu.Item
              name="companies"
              active={activeItem === 'companies'}
              onClick={handleItemClick}
            />
            <Menu.Item name="links" active={activeItem === 'links'} onClick={handleItemClick} />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={10}>
          <Segment>
            {activeItem === 'κατι αλλο για εργαζομενους' && (
              <p>hey</p>
              // Put 2 links as in: https://www.efka.gov.gr/el/rythmise-opheilon
            )}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
