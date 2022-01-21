import "./App.css";
import Root from "./route/Route";

//redux
import { Provider } from "react-redux";
import { Store, Persistor } from "./store/Store";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}

export default App;
