import React, { Component } from "react";
import { Button, Card, Image } from 'semantic-ui-react'
import Axios from "axios"
import history from "../history"

class Invitation extends Component {
  

  state={
    event:{},
    checkArray:[]
  }

  componentDidMount(){
   console.log(this.props.currentUser)
   var path= this.props.match.params;
   console.log(this.props.match)
   Axios.get("/api/event/public/"+path.id).then(event=>{
     this.setState({event:event.data[0]})
     this.setState({checkArray:event.data})
     console.log(this.state.event)
   }


   )
  }

    joinPublic= event=> {
      Axios.post("/api/users/addpublicevent",{userId:this.props.currentUser._id,eventId:this.state.event._id})
      .then(res=>history.push("/main"))
        
    }

    

    render() {


      if(this.state.checkArray.length) {
        return (
            <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={this.state.event.host.photo}
              />
              <Card.Header>{this.state.event.host.username}</Card.Header>
              <Card.Meta>Host of {this.state.event.name}</Card.Meta>
              <Card.Description>
              
              <br/>
              
              
              
              <img src={this.state.event.img} width="575" height="300"/>
              <br/>
              <h3>Event Description</h3>
              <h5>Event Name: {`\u00A0 ${this.state.event.name}`}</h5>
              <h5>Event Preview: {`\u00A0 ${this.state.event.description}`}</h5>
              <h5>Event Starting Date: {`\u00A0 ${this.state.event.startDate}`}</h5>
              <h5>Event Ending Date: {`\u00A0 ${this.state.event.endingDate}`}</h5>


              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green' onClick={this.joinPublic}>
                  Join Event
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
               
              </div>
            </Card.Content>
          </Card>)}
        }
        
        export default Invitation;
        
        
        
