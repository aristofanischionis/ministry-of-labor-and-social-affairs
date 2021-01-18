import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid, Image, Header, Button, Segment, Form} from 'semantic-ui-react';
import {setUserInStore} from '../../redux-store/actions';
import {getUserFromStore} from '../../redux-store/selector';

const Dashboard = ({user, setUser}) => {
  const [loading, setLoading] = useState(false);
  const [first_name, setFirstName] = useState(user.first_name);
  const [last_name, setLastName] = useState(user.last_name);
  const [occupation, setOccupation] = useState(user.occupation);
  const [company, setCompany] = useState(user.company);
  const handleClick = () => {
    const newUser = {
      first_name,
      last_name,
      occupation,
      company,
    };
    setUser(newUser);
    // TODO: send update to DB
    // TODO: Change password
  };

  return (
    <Segment raised style={{padding: '1% 20%'}} vertical>
      <Grid centered>
        <Grid.Row>
          <Image size="small" src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" />
        </Grid.Row>
        <Grid.Row textAlign="center">
          <div>
            <Header as="h2">
              {user.first_name}&nbsp;{user.last_name}
            </Header>
            <Header.Subheader>
              {user.occupation} στην εταιρεία {user.company}
            </Header.Subheader>
          </div>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <Segment>
              <Form loading={loading}>
                <Form.Field onChange={e => setFirstName(e.target.value)}>
                  <label>Όνομα</label>
                  <input placeholder={user.first_name} />
                </Form.Field>
                <Form.Field onChange={e => setLastName(e.target.value)}>
                  <label>Επίθετο</label>
                  <input placeholder={user.last_name} />
                </Form.Field>
                <Form.Field onChange={e => setOccupation(e.target.value)}>
                  <label>Επάγγελμα</label>
                  <input placeholder={user.occupation} />
                </Form.Field>
                <Form.Field onChange={e => setCompany(e.target.value)}>
                  <label>Εταιρεία</label>
                  <input placeholder={user.company} />
                </Form.Field>
                <Button type="submit" onClick={handleClick} disabled={loading}>
                  Υποβολή
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch(setUserInStore(user)),
  };
}

export default connect(
  state => ({
    user: getUserFromStore(state),
  }),
  mapDispatchToProps
)(Dashboard);
