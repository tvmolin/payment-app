import React from "react";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useHistory } from "react-router-dom";
import TransactionsList from "./TransactionsList";

function MainPage() {
  const history = useHistory();
  return (
    <MainLayout>
      <SideBar>
        <Avatar>
          <PersonIcon
            style={{
              height: "100%",
              width: "100%",
              gridColumn: "1 / 1",
              gridRow: "span 2",
            }}
          />
          <p>John Doe</p>
          <p style={{ gridColumn: "2 / 2" }}>@JohnnyD</p>
        </Avatar>
        <AccountTotal>
          <p>Balance: $135.00</p>
        </AccountTotal>
        <SideBarItem>
          <AddCircleIcon />
          <MonetizationOnIcon />
          <p style={{ marginLeft: "10px" }}>New payment</p>
        </SideBarItem>
        <SideBarItem>
          <HomeIcon />
          <p style={{ marginLeft: "10px" }}>Home</p>
        </SideBarItem>
        <SideBarItem onClick={() => history.push("/login")}>
          <LogoutIcon />
          <p style={{ marginLeft: "10px" }}>Logout</p>
        </SideBarItem>
      </SideBar>
      <ContentArea>
        <Title>
          <LocalAtmIcon style={{ width: "100px", height: "100px" }} />
          <p style={{ fontSize: "45px", marginLeft: "30px" }}>Payment App!</p>
        </Title>
        <TransactionsList />
      </ContentArea>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 7fr;
  color: white;
  overflow-y: hidden;
`;

const SideBar = styled.div`
  display: grid;
  background-color: rgb(37, 37, 38);
  padding: 30px;
  grid-template-columns: auto;
  grid-template-rows: 100px 100px 50px 50px 50px;
  grid-gap: 15px;
`;

const Avatar = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: auto auto;
  grid-gap: 5px;
`;

const AvatarPicture = styled.div`
  height: "100%";
  width: "100%";
  grid-column: "1 / 1";
  grid-row: "span 2";
`;

const AccountTotal = styled.div`
  display: flex;
  align-items: center;
`;

const SideBarItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ContentArea = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 50px 1fr;
  background-color: rgb(30, 30, 30);
  grid-gap: 50px;
  padding: 50px;
`;

const Title = styled.div`
  display: flex;
  color: white;
  align-self: center;
  justify-self: center;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
