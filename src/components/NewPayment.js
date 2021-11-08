import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useFetch from "use-http";
import { CircularProgress } from "@material-ui/core";
import useUpdateBalance from "../hooks/useUpdateBalance";

function NewPayment() {
  const history = useHistory();
  const [selectedReceiver, setSelectedReceiver] = useState(null);
  const [amount, setAmount] = useState(0);
  const [comments, setComments] = useState("");
  const [users, setUsers] = useState([]);
  const { post, get, loading, response } = useFetch("http://localhost:3004", {
    cachePolicy: "no-cache",
  });
  const { updateBalanceAndTransactions } = useUpdateBalance();

  const makePayment = async () => {
    await post(`/transactions`, {
      userId: localStorage.getItem("currentUser"),
      targetUserId: selectedReceiver.id,
      amount: Number(amount),
      comments,
      receiverName: selectedReceiver.label,
      payerName: localStorage.getItem("currentUserName"),
    });
    if (response.ok) {
      alert("Payment successful!");
      await updateBalanceAndTransactions();
      history.push("/app/home");
    } else {
      alert("Payment failed, try again later");
    }
  };

  const getAvailableUsers = async () => {
    const data = await get(`/users`);
    const mappedUsers = data
      .filter((item) => item.id !== 1)
      .map((item) => ({ id: item.id, label: item.name }));
    setUsers(mappedUsers);
  };

  useEffect(() => {
    getAvailableUsers();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress
          style={{
            marginTop: "200px",
            justifySelf: "center",
          }}
        />
      ) : selectedReceiver ? (
        <PaymentForm>
          <p style={{ justifySelf: "center", fontSize: "30px" }}>
            You are paying to: {selectedReceiver.label}
          </p>
          <TextField
            onChange={(e) => setAmount(e.target.value)}
            className={"white-text-field"}
            id="outlined-basic"
            label="Set the amount to be paid"
            variant="outlined"
            InputLabelProps={{ className: "white-text-field-label" }}
          />
          <TextField
            onChange={(e) => setComments(e.target.value)}
            className={"white-text-field"}
            id="outlined-basic"
            label="Write a comment for this payment"
            variant="outlined"
            InputLabelProps={{ className: "white-text-field-label" }}
          />
          <PaymentFormActions>
            <Button variant="contained" onClick={makePayment} type="submit">
              Make payment
            </Button>
            <Button
              variant="contained"
              onClick={() => setSelectedReceiver(null)}
              type="submit"
            >
              Select a different receiver
            </Button>
          </PaymentFormActions>
        </PaymentForm>
      ) : (
        <ReceiverSelection>
          <p style={{ fontSize: "30px" }}>
            Select the receiver of your payment:
          </p>
          <Autocomplete
            className={"white-text-field"}
            disablePortal
            id="combo-box-demo"
            options={users}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                InputLabelProps={{ className: "white-text-field-label" }}
                className={"white-text-field"}
                {...params}
                label="Payment receiver"
              />
            )}
            onChange={(e, value) => setSelectedReceiver(value)}
          />
        </ReceiverSelection>
      )}
    </>
  );
}

const ReceiverSelection = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: auto;
  grid-gap: 35px;
  grid-template-rows: 50px 50px;
`;

const PaymentForm = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 30vw;
  grid-gap: 40px;
  grid-template-rows: 50px 50px 50px 50px;
`;

const PaymentFormActions = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
  padding: 0 50px;
`;

export default NewPayment;
