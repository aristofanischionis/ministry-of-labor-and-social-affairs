import React, {useState} from 'react';
import {Button, Grid, Icon, Image, Menu, Segment} from 'semantic-ui-react';
import employer from '../../images/employer.jpg';
import {text1, text2, text3, text4} from './all_text';

export default function Employer() {
  const [activeItem, setActiveItem] = useState('Ρύθμιση Οφειλών');
  const handleItemClick = (e, {name}) => setActiveItem(name);

  return (
    <Grid centered columns={2}>
      <Grid.Row style={{'background-color': '#d7e9f7'}}>
        <Image verticalAlign="middle" src={employer} size="small" />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="Ρύθμιση Οφειλών"
              active={activeItem === 'Ρύθμιση Οφειλών'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Πιστοποίηση εργοδοτών"
              active={activeItem === 'Πιστοποίηση εργοδοτών'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Ηλεκτρονική υποβολή ΑΠΔ"
              active={activeItem === 'Ηλεκτρονική υποβολή ΑΠΔ'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Οικονομική καρτέλα εργοδότη"
              active={activeItem === 'Οικονομική καρτέλα εργοδότη'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Ασφαλιστικός οδηγός εργοδότη"
              active={activeItem === 'Ασφαλιστικός οδηγός εργοδότη'}
              onClick={handleItemClick}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={10}>
          <Segment >
            {activeItem === 'Ρύθμιση Οφειλών' && (
              <div>
                {text1()}
                <Button circular inverted color="blue">
                  <a
                    href="https://apps.ika.gr/eDebtorSettlement"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Είσοδος στην υπηρεσία &nbsp; <Icon name="lock" />
                  </a>
                </Button>
              </div>
            )}
            {activeItem === 'Πιστοποίηση εργοδοτών' && (
              <div>
                {text2()}
                <Button circular inverted color="blue">
                  <a
                    href="https://www.ika.gr/gr/secure/register/home.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Είσοδος στην υπηρεσία &nbsp; <Icon name="lock" />
                  </a>
                </Button>
              </div>
            )}
            {activeItem === 'Ηλεκτρονική υποβολή ΑΠΔ' && (
              <div>
                {text3()}
                <Button circular inverted color="blue">
                  <a href="https://apps.ika.gr/eAPDsso/" target="_blank" rel="noopener noreferrer">
                    Είσοδος στην υπηρεσία &nbsp; <Icon name="lock" />
                  </a>
                </Button>
              </div>
            )}
            {activeItem === 'Οικονομική καρτέλα εργοδότη' && (
              <div>
                {text4()}
                <p></p>
                <Button circular inverted color="blue">
                  <a
                    href="https://apps.ika.gr/eEmployerTransactions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Είσοδος στην υπηρεσία &nbsp; <Icon name="lock" />
                  </a>
                </Button>
              </div>
            )}
            {activeItem === 'Ασφαλιστικός οδηγός εργοδότη' && (
              <a
                style={{color: '#4d5bc9'}}
                href="http://www.ika.gr/gr/infopages/t-ikaetam/20150529_odhgos_ergodoth.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Κατεβάστε τον οδηγό <Icon name='file pdf outline' />
              </a>
            )}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
