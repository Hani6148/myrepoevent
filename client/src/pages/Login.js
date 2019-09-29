import { SignButton, SignWrap } from "../components/Signcard"
import { Col, Row, Container } from "../components/Grid";
import Logo from "../components/Logo";
import React from "react"
import "./Login.css"
function Login() {

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
                width: 100,
                margin: "auto",
                position: "relative",
                top: 35
              }}>Log In</h1>
              <div className="buttonWrap">
                <SignButton provider="Facebook" />
                <SignButton provider="Google" />
              </div>

              <p className="signup">Don't have a Facebook or Google account ? <a href="/signup"><b>Sign Up</b></a></p>
            </SignWrap>
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default Login;