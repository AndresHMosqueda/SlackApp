import React, { Component } from 'react';
import { Menu, Icon, Modal, Form, Input, Button, ModalActions } from 'semantic-ui-react';

class Channels extends Component {

    state = {
        channels: [],
        ChannelName: '',
        ChannelDetails: '',
        modal: false
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    closeModal = () => this.setState({ modal: false });
    openModal = () => this.setState({ modal: true });


    render() {

        const { channels, modal } = this.state;

        return (
            <React.Fragment>
                <Menu.Menu style={{ paddingBottom: '2em' }}>
                    <Menu.Item>
                        <span>
                            <Icon name="exchange" /> CHANNELS
                </span>{' '}
                        ({channels.length}) <Icon name="add" onClick={this.openModal} />
                    </Menu.Item>
                </Menu.Menu>


                <Modal basic open={modal} onClose={this.closeModal}>
                    <Modal.Header>Add a Channel</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <Input
                                    fluid
                                    label="Name of Channel"
                                    name="ChannelName"
                                    onChange={this.handleChange}
                                />
                            </Form.Field>



                            <Form.Field>
                                <Input
                                    fluid
                                    label="About the Channel"
                                    name="ChannelDetails"
                                    onChange={this.handleChange}
                                />
                            </Form.Field>

                        </Form>
                    </Modal.Content>

                    <ModalActions>
                        <Button color="green" inverted>
                            <Icon name="checkmark" />Add
                </Button>

                        <Button color="red" inverted onClick={this.closeModal}>
                            <Icon name="remove" />Cancel
                </Button>
                    </ModalActions>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Channels;