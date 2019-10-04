import React, { Component } from "react";
import { Button, Card, Image } from 'semantic-ui-react'
import Axios from "axios"
import history from "../history"

class Invitation extends Component {
  

  state={
    invitation:{},
    checkArray:[]
  }

  componentDidMount(){

   var path= this.props.match.params;
   console.log(path)
   Axios.get("/api/invite/invitation/"+path.id).then(invitation=>{
     this.setState({invitation:invitation.data[0]})
     this.setState({checkArray:invitation.data})
     console.log(this.state.invitation)
   }


   )
  }

    acceptInvitation= event=> {
      Axios.post("/api/users/addevent",{userId:this.state.invitation.receiver._id,eventId:this.state.invitation.event._id,invitationId:this.state.invitation._id})
      .then(res=>history.push("/main"))
        
    }

    declineInvitation=event=>{



    }

    render() {


      if(this.state.checkArray.length) {
        return (
            <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={this.state.invitation.sender.photo}
              />
              <Card.Header>{this.state.invitation.sender.username}</Card.Header>
              <Card.Meta>Host of {this.state.invitation.event.name}</Card.Meta>
              <Card.Description>
              <strong>{this.state.invitation.sender.username}</strong> wants to add you to the event <strong>{this.state.invitation.event.name}</strong>
              <br/>
              <br/>
              <br/>
              
              <img src={this.state.invitation.event.img} width="575" height="300"/>
              <br/>
              <h3>Event Description</h3>
              <h5>Event Name: {`\u00A0 ${this.state.invitation.event.name}`}</h5>
              <h5>Event Preview: {`\u00A0 ${this.state.invitation.event.description}`}</h5>
              <h5>Event Starting Date: {`\u00A0 ${this.state.invitation.event.startDate}`}</h5>
              <h5>Event Ending Date: {`\u00A0 ${this.state.invitation.event.endingDate}`}</h5>


              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green' onClick={this.acceptInvitation}>
                  Accpet
                </Button>
                <Button basic color='red' onClick={this.declineInvitation}>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
            
                )

               
            }
          
          else return ( <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src="https://cdn.cnn.com/cnnnext/dam/assets/190923112717-greta-thunberg-unga-climate-change-exlarge-169.jpg"
              />
              <Card.Header></Card.Header>
              <Card.Meta></Card.Meta>
              <Card.Description>
               wants to add you to the event <strong></strong>
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
          </Card>)}
        }
        
        export default Invitation;
        
        
        
