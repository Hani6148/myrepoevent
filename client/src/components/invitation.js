import React, { Component } from "react";
import { Button, Card, Image } from 'semantic-ui-react'
import Axios from "axios"

class Invitation extends Component {

    acceptInvitation= event=> {
        
    }

    render() {
        return (
            <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={this.props.event.sender.picture}
              />
              <Card.Header>{this.props.event.sender.username}</Card.Header>
              <Card.Meta>{this.props.event.sender.Title || "No Title"}</Card.Meta>
              <Card.Description>
              {this.props.event.sender.username} wants to add you to the event <strong>{this.props.event.name}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green' onClick={this.acceptInvitation}>
                  Accpet
                </Button>
                <Button basic color='red' onClick={this.acceptInvitation}>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
            
                )
            }
        }
        
        export default Invitation;
        
        
        
