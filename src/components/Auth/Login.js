
import React, { Component } from 'react';
import firebase from '../../firebase'
import { Link } from 'react-router-dom';
import md5 from 'md5';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';

class Login extends Component {
    state = {

        email: "",
        password: "",
        errors: [],
        loading: false,
    }




    isPasswordValid = ({ password, passwordConfirmation }) => {
        if (password.length < 6 || passwordConfirmation.length < 6) {
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

    handleInputError(errors, inputName) {
        return errors.some(error => error.message.toLowerCase().includes(inputName)) ? 'error' : ''
    }

    handleSubmit = e => {

        if (this.isFormValid(this.state)) {
            e.preventDefault();
            this.setState({ errors: [], loading: true })
            firebase.auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(signedInUser => {
                    console.log(signedInUser);
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        errors: this.state.errors.concat(err),
                        loading: false
                    })
                })
        }
    }

    isFormValid = ({ email, password }) => email && password;

    render() {

        const { email, password, errors, loading } = this.state;

        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="violet" textAlign="center">
                        <Icon name="code branch" color="violet" />
                        Login to SlackApp
                     </Header>
                    <Form size="large" onSubmit={this.handleSubmit}>
                        <Segment stacked>


                            <Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" type="email" value={email} className={this.handleInputError(errors, 'email')} onChange={this.handleChange} />

                            <Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" type="password" value={password} onChange={this.handleChange} className={this.handleInputError(errors, 'password')} />

                            <Button disabled={loading} className={loading ? 'loading' : ''} color="violet" fluid size="large" >Submit</Button>

                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>Don't have an account? <Link to="/register">Register</Link></Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Login;