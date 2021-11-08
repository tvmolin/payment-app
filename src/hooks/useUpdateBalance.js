import { useDispatch } from "react-redux";
import useFetch from "use-http";
import { setBalance, setTransactions } from "../features/appSlice";

const useUpdateBalance = () => {
  const dispatch = useDispatch();
  const { get } = useFetch("http://localhost:3004", {
    cachePolicy: "no-cache",
  });

  const updateBalanceAndTransactions = async () => {
    const myPayments = await get(
      `/users/${localStorage.getItem("currentUser")}/transactions`
    );
    const paymentsToMe = await get(
      `/transactions?targetUserId=${localStorage.getItem("currentUser")}`
    );
    dispatch(
      setTransactions({ transactions: [...myPayments, ...paymentsToMe] })
    );
    let total = 0;
    myPayments.forEach((transaction) => {
      total -= transaction.amount;
    });
    paymentsToMe.forEach((transaction) => {
      total += transaction.amount;
    });
    dispatch(setBalance({ balance: total }));
  };

  return { updateBalanceAndTransactions };
};

export default useUpdateBalance;
