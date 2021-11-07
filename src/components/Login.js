import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { useNavigate } from "react-router";
import useFetch from "use-http";

function Login() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { get, loading } = useFetch("http://localhost:3004", {
    cachePolicy: "no-cache",
  });

  const attemptLogin = async (e) => {
    e.preventDefault();
    const data = await get(`/users?userName=${username}&password=${password}`);
    if (data.length > 0) navigate("/home");
    else alert("wrong username or password"); //TODO better error handling UI
  };

  const passwordReset = () => {
    alert("Coming Soon™");
  };
  return (
    <Layout>
      <Title>
        <LocalAtmIcon style={{ width: "100px", height: "100px" }} />
        <p style={{ fontSize: "45px", marginLeft: "30px" }}>Payment App!</p>
      </Title>
      <LoginArea>
        <TextField
          onChange={(e) => setUserName(e.target.value)}
          inputProps={{ "data-testid": "UsernameField" }}
          className={"white-text-field"}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          InputLabelProps={{ className: "white-text-field-label" }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          inputProps={{ "data-testid": "PasswordField" }}
          className={"white-text-field"}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          InputLabelProps={{ className: "white-text-field-label" }}
        />
        <LoginActions>
          <Button variant="contained" onClick={attemptLogin} type='submit'>
            Sign In
          </Button>
          <Button variant="outlined" onClick={passwordReset}>
            Password reset
          </Button>
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

const LoginArea = styled.form`
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
