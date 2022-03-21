import "./app.scss";
import { useState } from "react";
import {
  Topbar,
  Menu,
  Intro,
  Portfolio,
  Work,
  Testimonials,
  Contacts,
  Footer
} from "./components";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}
        items={[
          { name: "intro", link: "intro" },
          { name: "portfolio", link: "portfolio" },
          { name: "work", link: "work" },
          { name: "testimonials", link: "testimonials" },
          { name: "contacts", link: "contacts" },
        ]}
      />

      <div className="app__sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contacts />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
