
import React, { Component } from 'react';
import firebase from '../../firebase'
import { Link } from 'react-router-dom';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: []
    }

    isFormValid = () => {
        let errors = [];
        let error;
        if(this.isFormEmpty(this.state)) {
            //throw error
        error = {message: 'Fill in all fields'};
        this.setState({ errors: errors.concat(error)})
        return false;
        }else if (!this.isPasswordValid(this.state)) {
            //throw err
        error = { message: 'Invalid Password'}
        this.setState({errors: errors.concat(error)})
            return false;
        } else {
            //form valid
            return true;
        }
    }
    isFormEmpty = ({username, email, password, passwordConfirmation}) => {
        return !username.length || !email.length || !password.length || !passwordConfirmation.length
    }

    isPasswordValid = ({password, passwordConfirmation}) => {
        if(password.length < 6 || passwordConfirmation.length < 6){
            return false;
        } else if (password !== passwordConfirmation) {
            return false;
        } else {
            return true;
        }
    }

    displayErrors = errors => errors.map((error, i) => <p key={i}> {error.message} </p>)

    handleChange = e => {

        this.setState({ [e.target.name]: e.target.value })

    }

    handleSubmit = e => {
        if (this.isFormValid()) {

            e.preventDefault();
            firebase.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(createdUser => {
                    console.log(createdUser);

                })
                .catch(err => {
                    console.error(err);
                })
        }
    }

    render() {

        const { username, email, password, passwordConfirmation, errors } = this.state;

        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="puzzle piece" color="orange" />
                        Register for SlackApp
                     </Header>
                    <Form size="large" onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username" type="text" value={username} onChange={this.handleChange} />

                            <Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" type="email" value={email} onChange={this.handleChange} />

                            <Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" type="password" value={password} onChange={this.handleChange} />

                            <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="Password Confirmation" value={passwordConfirmation} type="password" onChange={this.handleChange} />
                            <Button color="orange" fluid size="large" >Submit</Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>Already a user? <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Register;