import { SignButton, SignWrap, InputWrap, Input, SubButton } from "../components/Signcard"
import { Col, Row, Container } from "../components/Grid";
import Logo from "../components/Logo";
import React, { Component } from "react"
import "./signup.css"
class Signup extends Component {
    state = {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordValid: ""


    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6 sm-12 cont1">
                        <Logo />
                    </Col>
                    <Col size="md-6 sm-12 cont2">

                        <div className="graywrap">
                            <SignWrap>
                                <h1 style={{
                                    width: 150,
                                    margin: "auto",
                                    position: "relative",
                                    top: 35
                                }}>Sign Up</h1>
                                <InputWrap>
                                    <Input

                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        name="firstName"
                                        placeholder="First Name"
                                    />
                                    <Input
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        name="lastName"
                                        placeholder="Last Name" />
                                    <Input
                                        value={this.state.userName}
                                        onChange={this.handleInputChange}
                                        name="userName"
                                        placeholder="Username" />
                                    <Input
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        placeholder="Email" />

                                    <Input
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                    />

                                    <Input
                                        value={this.state.passwordValid}
                                        onChange={this.handleInputChange}
                                        name="passwordValid"
                                        placeholder="Retype Password"
                                        type="password"
                                    />
                                    <SubButton />
                                </InputWrap>
                            </SignWrap>
                        </div>




                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Signup;