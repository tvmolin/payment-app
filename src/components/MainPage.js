import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useHistory } from "react-router-dom";
import TransactionsList from "./TransactionsList";
import useFetch from "use-http";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import NewPayment from "./NewPayment";
import { useSelector } from "react-redux";
import { selectBalance, selectTransactions } from "../features/appSlice";
import useUpdateBalance from "../hooks/useUpdateBalance";
import useInterval from "@use-it/interval";

function MainPage() {
  const transactions = useSelector(selectTransactions);
  const balance = useSelector(selectBalance);
  let { path } = useRouteMatch();
  const history = useHistory();
  const [user, setUser] = useState({});
  const { get, loading, response } = useFetch("http://localhost:3004", {
    cachePolicy: "no-cache",
  });
  const { updateBalanceAndTransactions } = useUpdateBalance();

  const fetchUser = async () => {
    const data = await get(`/users/${localStorage.getItem("currentUser")}`);
    if (response.ok) setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUserName");
    history.push("/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("currentUser")) history.push("/login");
    fetchUser();
    updateBalanceAndTransactions();
  }, []);

  useInterval(updateBalanceAndTransactions, 3000);

  return (
    <MainLayout>
      <SideBar>
        <Avatar>
          {loading ? (
            <PersonIcon
              style={{
                height: "100%",
                width: "100%",
                gridColumn: "1 / 1",
                gridRow: "span 2",
              }}
            />
          ) : (
            <img
              style={{
                width: "100%", //TODO This is looking wonky
                gridColumn: "1 / 1",
                gridRow: "span 2",
              }}
              src={user?.profilePicture}
            />
          )}
          <p>{user?.name}</p>
          <p>@{user?.userName}</p>
        </Avatar>
        <AccountTotal>
          <p>Balance: ${balance || "----"}</p>
        </AccountTotal>
        <SideBarItem onClick={() => history.push(`${path}/new-payment`)}>
          <AddCircleIcon />
          <MonetizationOnIcon />
          <p style={{ marginLeft: "10px" }}>New payment</p>
        </SideBarItem>
        <SideBarItem onClick={() => history.push(`${path}/home`)}>
          <HomeIcon />
          <p style={{ marginLeft: "10px" }}>Home</p>
        </SideBarItem>
        <SideBarItem onClick={logout}>
          <LogoutIcon />
          <p style={{ marginLeft: "10px" }}>Logout</p>
        </SideBarItem>
      </SideBar>
      <ContentArea>
        <Title>
          <LocalAtmIcon style={{ width: "100px", height: "100px" }} />
          <p style={{ fontSize: "45px", marginLeft: "30px" }}>Payment App!</p>
        </Title>
        <Switch>
          <Route path={`${path}/new-payment`}>
            <NewPayment />
          </Route>
          <Route path={`${path}/home`}>
            <TransactionsList transactions={transactions} />
          </Route>
        </Switch>
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
  grid-template-rows: 50px 100px 50px 50px 50px;
  grid-gap: 15px;
`;

const Avatar = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: auto auto;
  grid-gap: 5px;
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
