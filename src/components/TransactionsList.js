import styled from "styled-components";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

function TransactionsList({ transactions }) {
  return (
    <List>
      {transactions?.map((transaction) => (
        <TransactionItem key={transaction?.id}>
          <img
            style={{
              width: "100%",
              gridColumn: "1 / 1",
              gridRow: "span 2",
              alignSelf: 'center'
            }}
            src={transaction?.payerImage}
          />
          <div style={{ alignSelf: "center", justifySelf: "center" }}>
            <ArrowForwardIcon />
          </div>
          <div
            style={{
              alignSelf: "center",
              justifySelf: "center",
              gridColumn: "2 / 2",
              gridRow: "2 / 2",
            }}
          >
            <MonetizationOnIcon />
          </div>
          <img
            style={{
              width: "100%",
              gridColumn: "3 / 3",
              gridRow: "span 2",
              alignSelf: 'center'
            }}
            src={transaction?.receiverImage}
          />
          <span>
            {transaction?.payerName} paid {transaction?.receiverName}
          </span>
          <span style={{ gridColumn: "4 / 4", gridRow: "2 / 2" }}>
            PaymentComments: {transaction?.comments}
          </span>
          <span
            style={{
              gridRow: "span 2",
              gridColumn: "5 / 5",
              alignSelf: "center",
              justifySelf: "end",
              fontSize: "30px",
            }}
          >
            <div
              style={
                transaction?.targetUserId ===
                Number(localStorage.getItem("currentUser"))
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              ${transaction?.amount}
            </div>
          </span>
        </TransactionItem>
      ))}
    </List>
  );
}

const List = styled.div`
  overflow-y: scroll;
  height: 80vh;
  padding-right: 30px;
`;

const TransactionItem = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 65px 65px 50px 3fr 1fr;
  border: 1px solid black;
  border-radius: 20px;
  padding: 30px 80px;
  margin-bottom: 10px;
  grid-gap: 20px;
`;

export default TransactionsList;
