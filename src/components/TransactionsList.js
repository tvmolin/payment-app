import styled from "styled-components";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

function TransactionsList({ transactions }) {
  return (
    <List>
      {transactions?.map((transaction) => (
        <TransactionItem>
          <PersonIcon
            style={{
              height: "100%",
              width: "100%",
              gridColumn: "1 / 1",
              gridRow: "span 2",
            }}
          />
          <span>
            {transaction.payerName} paid {transaction.receiverName}
          </span>
          <span style={{ gridColumn: "2 / 2", gridRow: "2 / 2" }}>
            PaymentComments: {transaction.comments}
          </span>
          <span
            style={{
              gridRow: "span 2",
              gridColumn: "3 / 3",
              alignSelf: "center",
              justifySelf: "end",
              fontSize: "30px",
            }}
          >
            <div
              style={
                transaction.targetUserId === 1
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              ${transaction.amount}
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
  grid-template-columns: 50px 3fr 1fr;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px 50px 10px 10px;
  margin-bottom: 10px;
  grid-gap: 20px;
`;

export default TransactionsList;
