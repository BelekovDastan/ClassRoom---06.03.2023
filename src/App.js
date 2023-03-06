import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  const users = [
    { name: "Dosya", lastName: "Belekov", age: "24", id: "123" },
    // { name: "Anton", lastName: "She", age: "26", id: "120" },
  ];
  return (
    <div>
      <Header />
      <Section users={users[0]} />
      <Footer />
    </div>
  );
};

export default App;
