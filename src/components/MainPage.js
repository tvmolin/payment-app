import React from "react";
import styled from "styled-components";
import LogoutIcon from '@mui/icons-material/Logout';

function MainPage() {
  return (
    <MainLayout>
      <SideBar>
        <LogoutIcon />
      </SideBar>
      <ContentArea>contente</ContentArea>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 7fr;
  color: white;
`;

const SideBar = styled.div`
  display: grid;
  background-color: rgb(37, 37, 38);
  padding: 30px;
`;

const ContentArea = styled.div`
  display: grid;
  background-color: rgb(30, 30, 30);
  padding: 50px
`;

export default MainPage;
