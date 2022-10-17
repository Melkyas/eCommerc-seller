

import { AppContext, AppContextProvider } from "./main/context";
import Header from "./components/Header";
import OrderList from "./components/OrderList";
import { useContext } from "react";
import Login from "./components/Login";

function Body() {
  const { authenticated } = useContext(AppContext);
  return authenticated ? (
    <>
      <Header />
      <OrderList />
    </>
  ) : (
    <Login></Login>
  );
}
function App() {
  return (
    <AppContextProvider>
      <Body />
    </AppContextProvider>
  );
}

export default App;
