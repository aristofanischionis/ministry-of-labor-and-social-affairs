import React from 'react';
import HomeTabs from './HomeTabs';
import HomeGrid from './HomeGrid';
import HomeCards from './HomeCards';
import {Grid} from 'semantic-ui-react';
import './index.css';

// https://react.semantic-ui.com/layouts/homepage/
// homepage example
export default function Home() {
  return (
    <div>
      <Grid className="background-coloring2">
        <Grid.Row centered className="move-down">
          <p className="text-size">
            Καλώς ήλθατε στο <br />
            Υπουργείο Εργασίας και Κοινωνικών Υποθέσεων
          </p>
        </Grid.Row>
      </Grid>
      <HomeCards />
      <HomeGrid />
      <HomeTabs />
    </div>
  );
}
