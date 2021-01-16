import React, {useState} from 'react';
import {Grid, Image, Menu, Segment} from 'semantic-ui-react';
import ministry from '../../images/ministry.jpg';

// Complete the rest
export default function Ministry() {
  const [activeItem, setActiveItem] = useState('κατι για υπουργειο');
  const handleItemClick = (e, {name}) => setActiveItem(name);

  return (
    <Grid centered columns={2}>
      <Grid.Row style={{'background-color': '#f3f3f3'}}>
        <Image verticalAlign="middle" src={ministry} size="medium" />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="κατι για υπουργειο"
              active={activeItem === 'κατι για υπουργειο'}
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
            {activeItem === 'κατι για υπουργειο' && (
              <p>hey</p>
            )}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
