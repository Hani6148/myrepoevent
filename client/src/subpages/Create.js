import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Banner from "../components/CreateEvent/Banner"
import React, { Component } from "react"
import "./Create.css"
import { Dropdown } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../utils/API";
import SubButton from "../components/CreateEvent/EventSub"
import history from "../history"
import Axios from "axios"


class Create extends Component {
    state = {
        
        eventname: "",
        eventdesc: "",
        startDate: new Date(),
        endDate: new Date(),
        image:"",
        eventtype:"",
        users:[],
        userSelected:[],
        eventhost:this.props.currentUser._id,
        selected:""

      

    }
  
   
    componentDidMount() {
        
        API.getUsers().then(res =>{
            console.log(this.props.currentUser)
            var users=res.data.filter(user=>user.username!=this.props.currentUser.username).map(user=>{
                return{
                    key:user._id,
                    text:user.username,
                    value:user._id
                }
            })
            this.setState({users:users})
        })
      }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    changeStartDate = date =>{ this.setState({ startDate:date })
                               console.log(date)                                }
    changeEndDate = date => this.setState({ endDate:date })

    checkUploadResult=(resultEvent) =>{
        if(resultEvent.event==="success"){
            console.log(resultEvent.info.url)
            this.setState({image:resultEvent.info.url})
            console.log(this.state.image)
        }
        
        }

        eventTypeChange=(value) =>{
         this.setState({eventtype:value})
         console.log(this.state.userSelected)
         if (value==="public"){
            this.setState({selected:"dontshow"})
         }
         else{
            this.setState({selected:""})
         }
         
        }
        pickUser=(event,data)=>{
            this.setState({userSelected:data.value})
        }

        CreateAndInvite=(event)=>{
           
          
            console.log("hani")
            event.preventDefault();
            var eventData={
                name:this.state.eventname,
                img:this.state.image,
                description:this.state.eventdesc,
                type:this.state.eventtype,
                host:this.state.eventhost,
                startDate:this.state.startDate,
                endingDate:this.state.endDate

            }
            if(this.state.eventtype=="private")  { API.createEvent(eventData).then((data)=>{
            Axios.post("api/users/addhost",{eventId:data.data._id, userId:this.state.eventhost})
            .then(history.push('/main'))
               
               this.state.userSelected.map(user=>{
                   console.log("event name I NEED",data)
                   var invite={
                    event:data.data._id,
                    sender:this.state.eventhost,
                    receiver:user,
                    invitationstatus:"pending"
                }
                   return API.InviteFriends(invite)
               })
              
        }
               
           )
    }

        else{
            API.createEvent(eventData).then((data)=>{
                Axios.post("/api/users/addhost",{eventId:data.data._id, userId:this.state.eventhost})
                .then(history.push("/main"))

            })
        }
        }

    render() {
        return (
            <div className="container" id="mainsectionCtrE">
            <Container>
                <Row>

                    <Col size="md-12 sm-12 cont2">

                        <h1 
                            className="sectiontitle"
                            style={{
                            margin: 10
                        }}>Create An Event</h1>

                        <Banner image={this.state.image} checkUploadResult={this.checkUploadResult}/>

                        <div className="eventInput">
                            <Input
                                value={this.state.eventname}
                                onChange={this.handleInputChange}
                                name="eventname"
                                placeholder="Event Name"
                            />
                            <TextArea
                                value={this.state.eventdesc}
                                onChange={this.handleInputChange}
                                name="eventdesc"
                                placeholder="Event Description"
                            />

                            <RadioGroup onChange={this.eventTypeChange} horizontal>
                                <RadioButton value="public">
                                    Public
                                </RadioButton>
                                <RadioButton value="private">
                                    Private
                               </RadioButton>
                            </RadioGroup>
                            <br />
                            <br />
                            <div className={this.state.selected}>
                            <Dropdown
                                clearable
                                fluid
                                multiple
                                search
                                selection
                                options={this.state.users}
                                placeholder='Add people to Event'
                                onChange={this.pickUser}
                            />
                             </div>
                             <br/>
                             <br/>
                             <Row>
                             <Col size="md- sm-6">
                                 <h6>Start Date</h6>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.changeStartDate}
                            />
                             </Col>
                             <Col size="md- sm-6">
                             <h6>End Date</h6>
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={this.changeEndDate}
                            />
                             </Col>
                            </Row>

                            <SubButton onClick={this.CreateAndInvite}/>

                        </div>



                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default Create;