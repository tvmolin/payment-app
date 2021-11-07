import { Button, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";

function Login() {
  return (
    <Layout>
      <Title>
        <LocalAtmIcon style={{ width: "100px", height: "100px" }} />
        <p style={{ fontSize: "45px", marginLeft: "30px" }}>Payment App!</p>
      </Title>
      <LoginArea>
        <TextField
          className={"white-text-field"}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          InputLabelProps={{ className: "white-text-field-label" }}
        />
        <TextField
          className={"white-text-field"}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          InputLabelProps={{ className: "white-text-field-label" }}
        />
        <LoginActions>
          <Button variant="contained">Sign In</Button>
          <Button variant="outlined">Password reset</Button>
        </LoginActions>
      </LoginArea>
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  background-color: rgb(30, 30, 30);
`;

const Title = styled.div`
  display: flex;
  grid-column: 2 / 2;
  grid-row: 1 / 1;
  color: white;
  align-self: center;
  justify-self: center;
  justify-content: center;
  align-items: center;
`;

const LoginArea = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-column: 2 / 2;
  grid-row: 2 / 2;
  grid-template-columns: auto;
  background-color: rgb(37, 37, 38);
  padding: 80px 100px;
  align-items: center; ;
`;

const LoginActions = styled.div`
  display: grid;
  grid-gap: 15px;
`;

export default Login;
