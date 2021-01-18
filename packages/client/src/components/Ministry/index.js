import React, {useState} from 'react';
import {Grid, Image, Menu, Segment, Header} from 'semantic-ui-react';
import ministry from '../../images/ministry2.jpg';
import {text1, text2, text3, text4, text5} from './all_text';

export default function Departments() {
  const [activeItem, setActiveItem] = useState('Γενικά');
  const handleItemClick = (e, {name}) => setActiveItem(name);

  return (
    <Grid centered columns={2}>
      <Grid.Row style={{'background-color': '#f6f6f8'}}>
        <Image verticalAlign="middle" src={ministry} size="small" />
      </Grid.Row>
      <Header>Υπουργείο</Header>
      <Grid.Row>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name="Γενικά" active={activeItem === 'Γενικά'} onClick={handleItemClick} />
            <Menu.Item
              name="Ανώτατο και κατώτατο όριο ασφαλιστέων αποδοχών"
              active={activeItem === 'Ανώτατο και κατώτατο όριο ασφαλιστέων αποδοχών'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Ποσό της σύνταξης λόγω γήρατος"
              active={activeItem === 'Ποσό της σύνταξης λόγω γήρατος'}
              onClick={handleItemClick}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={10}>
          <Segment textAlign={activeItem === 'Γενικά' && 'center'}>
            {activeItem === 'Γενικά' && <div>{text1()}</div>}
            {activeItem === 'Ανώτατο και κατώτατο όριο ασφαλιστέων αποδοχών' && (
              <div>{text2()}</div>
            )}
            {activeItem === 'Ποσό της σύνταξης λόγω γήρατος' && <div>{text3()}</div>}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
