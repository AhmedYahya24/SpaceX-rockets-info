import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import App from "./App";

const client = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
