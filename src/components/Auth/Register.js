
import React, { Component } from 'react';

import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';

class Register extends Component {
    state = {}

    handleChange = () => {

    }

    render() {
        return (
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="puzzle piece" color="orange" />
                        Register for SlackApp
                     </Header>
                    <Form size="large">
                        <Segment stacked>
                            <Form.Input fluid name="username"  icon="user" iconPosition="left" placeholder="Username" type="text" onChange={this.handleChange}/>

                            <Form.Input fluid name="email"  icon="mail" iconPosition="left" placeholder="Email Address" type="email" onChange={this.handleChange}/>

                            <Form.Input fluid name="password"  icon="lock" iconPosition="left" placeholder="Password" type="password" onChange={this.handleChange}/>

                            
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Register;