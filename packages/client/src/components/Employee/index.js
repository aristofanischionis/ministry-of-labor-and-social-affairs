import React, {useState} from 'react';
import {Grid, Header, Image, Menu, Segment} from 'semantic-ui-react';
import employee from '../../images/employee.jpg';
import {text1, text2, text3, text4} from './all_text';

// Complete the rest
export default function Employee() {
  const [activeItem, setActiveItem] = useState('Υποχρεώσεις & Δικαιώματα Εργαζομένων');
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
              name="Υποχρεώσεις & Δικαιώματα Εργαζομένων"
              active={activeItem === 'Υποχρεώσεις & Δικαιώματα Εργαζομένων'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Επίδομα Μακροχρονίως Ανέργων"
              active={activeItem === 'Επίδομα Μακροχρονίως Ανέργων'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Ευρωπαϊκή Στρατηγική Απασχόλησης"
              active={activeItem === 'Ευρωπαϊκή Στρατηγική Απασχόλησης'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Εργασιακά δικαιώματα"
              active={activeItem === 'Εργασιακά δικαιώματα'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Περισσότερα"
              active={activeItem === 'Περισσότερα'}
              onClick={handleItemClick}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={10}>
          <Segment >
            {activeItem === 'Υποχρεώσεις & Δικαιώματα Εργαζομένων' && (
              <div>
                {text1()}
              </div>
            )}
            {activeItem === 'Επίδομα Μακροχρονίως Ανέργων' && (
              <div>
                {text2()}
              </div>
            )}
            {activeItem === 'Ευρωπαϊκή Στρατηγική Απασχόλησης' && (
              <div>
                {text3()}
              </div>
            )}
            {activeItem === 'Εργασιακά δικαιώματα' && (
              <div>
                {text4()}
                <p></p>
              </div>
            )}
            {activeItem === 'Περισσότερα' && (
              <div>Για περισσότερες πληροφορίες πατήστε <a href='https://covid19.gov.gr/category/oikonomia-ergasia/ergazomenoi/' target="_blank">εδώ</a></div>
            )}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
// Put 2 links as in: https://www.efka.gov.gr/el/rythmise-opheilon