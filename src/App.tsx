import React, {useState} from "react";

import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./containers/Footer/Footer";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import "./App.css";

const App: React.FC = () => {
  // const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Header />
      <Main />
      <Footer />
      {/*<ModalWindow open={openModal} />*/}
    </>
  );
};

export default App;
