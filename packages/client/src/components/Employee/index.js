import React, {useState} from 'react';
import {Grid, Image, Menu, Segment} from 'semantic-ui-react';
import employee from '../../images/employee.jpg';

// Complete the rest
export default function Employee() {
  const [activeItem, setActiveItem] = useState('Ρύθμιση Οφειλών');
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
              name="Ρύθμιση Οφειλών"
              active={activeItem === 'Ρύθμιση Οφειλών'}
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
            {activeItem === 'Ρύθμιση Οφειλών' && (
              <p>
                Μέσω της υπηρεσίας παρέχεται η δυνατότητα στους οφειλέτες του ΚΕΑΟ να ρυθμίσουν
                ηλεκτρονικά τις οφειλές τους. Για την πρόσβαση στην ηλεκτρονική υπηρεσία:
                <ul>
                  <li>
                    Οι οφειλέτες - εργοδότες μπορούν να χρησιμοποιούν για την πρόσβασή τους, τους
                    κωδικούς πρόσβασης που έχουν για την Ηλεκτρονική Υποβολή ΑΠΔ.
                  </li>
                  <li>
                    Οι υπόλοιποι οφειλέτες πρέπει να κάνουν χρήση των κωδικών που δήλωσαν κατά την
                    πιστοποίησή τους.
                  </li>
                </ul>
                Όσοι οφειλέτες δεν έχουν αποκτήσει κωδικούς πρόσβασης για τις ηλεκτρονικές υπηρεσίες
                θα πρέπει, πριν την υποβολή αίτησης ρύθμισης, να πιστοποιηθούν μέσω της υπηρεσίας
                Πιστοποίηση οφειλετών.
              </p>
              // Put 2 links as in: https://www.efka.gov.gr/el/rythmise-opheilon
            )}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
