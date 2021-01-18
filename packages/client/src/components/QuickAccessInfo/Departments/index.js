import React, {useState} from 'react';
import {Header, Grid, Icon, Image, Menu, Segment} from 'semantic-ui-react';
import department from '../../../images/department.jpg';
import {text1, text2, text3, text4, text5} from './all_text';

export default function Departments() {
  const [activeItem, setActiveItem] = useState('Υπηρεσίες Κοινωνικών Ασφαλίσεων');
  const handleItemClick = (e, {name}) => setActiveItem(name);

  return (
    <Grid centered columns={2}>
      <Grid.Row style={{'background-color': '#def6ff'}}>
        <Image verticalAlign="middle" src={department} size="medium" />
      </Grid.Row>
      <Header>Τμήματα - Ιδρύματα - Υπηρεσίες</Header>
      <Grid.Row>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="Υπηρεσίες Κοινωνικών Ασφαλίσεων"
              active={activeItem === 'Υπηρεσίες Κοινωνικών Ασφαλίσεων'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Υπηρεσίες Κοινωνικής Ευημερίας"
              active={activeItem === 'Υπηρεσίες Κοινωνικής Ευημερίας'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Τμήμα Εργασίας"
              active={activeItem === 'Τμήμα Εργασίας'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Τμήμα Εργασιακών Σχέσεων"
              active={activeItem === 'Τμήμα Εργασιακών Σχέσεων'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Τμήμα Κοινωνικής Ενσωμάτωσης Ατόμων με Αναπηρίες"
              active={activeItem === 'Τμήμα Κοινωνικής Ενσωμάτωσης Ατόμων με Αναπηρίες'}
              onClick={handleItemClick}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={10}>
          <Segment textAlign={activeItem === 'Τμήμα Εργασιακών Σχέσεων' && 'center'}>
            {activeItem === 'Υπηρεσίες Κοινωνικών Ασφαλίσεων' && (
              <div>
                {text1()}
              </div>
            )}
            {activeItem === 'Υπηρεσίες Κοινωνικής Ευημερίας' && (
              <div>
                {text2()}
              </div>
            )}
            {activeItem === 'Τμήμα Εργασίας' && (
              <div>
                {text3()}
              </div>
            )}
            {activeItem === 'Τμήμα Εργασιακών Σχέσεων' && (
              <div>
                {text4()}
              </div>
            )}
            {activeItem === 'Τμήμα Κοινωνικής Ενσωμάτωσης Ατόμων με Αναπηρίες' && (
              <div>
                {text5()}
              </div>
            )}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
