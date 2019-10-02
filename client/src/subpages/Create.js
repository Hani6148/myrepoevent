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



class Create extends Component {
    state = {
        
        eventname: "",
        eventdesc: "",
        startdate: new Date(),
        enddate: new Date(),
        image:"",
        eventtype:"",
        users:[],
        userSelected:[]

      

    }

   
    componentDidMount() {
        API.getUsers().then(res =>{
            console.log(res.data)
            var users=res.data.map(user=>{
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

    changeStartDate = date => this.setState({ startdate:date })
    changeEndDate = date => this.setState({ enddate:date })

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

            }
           API.createEvent(eventData).then((data)=>{
               this.state.userSelected.map(user=>{
                   return API.InviteFriends({
                       event:data._id,
                       receiver:user,
                       invitationstatus:"pending"
                   })
               })
               this.props.history.push('/main')
        }
               
           )
        }

    render() {
        return (
            <Container>
                <Row>

                    <Col size="md-12 sm-12 cont2">

                        <h1 style={{
                            position: "relative",
                            left: 55,
                            marginBottom: 34
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

                            <Dropdown
                                clearable
                                fluid
                                multiple
                                search
                                selection
                                options={this.state.users}
                                placeholder='Add Event Hosts'
                                onChange={this.pickUser}
                            />
                             
                             <br/>
                             <br/>
                             <Row>
                             <Col size="md- sm-6">
                                 <h6>Start Date</h6>
                            <DatePicker
                                selected={this.state.startdate}
                                onChange={this.changeStartDate}
                            />
                             </Col>
                             <Col size="md- sm-6">
                             <h6>End Date</h6>
                            <DatePicker
                                selected={this.state.enddate}
                                onChange={this.changeEndDate}
                            />
                             </Col>
                            </Row>

                            <SubButton onClick={this.CreateAndInvite}/>

                        </div>



                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Create;