import { useState } from "react";
import { Header } from "../Header/Header";
import { Info } from "../Info/Info";
import { SuscribeButton } from "../SuscribeButton/SuscribeButton";
import { SuscribeForm } from "../SuscribeForm/SuscribeForm";
import { Wrapper } from "../Wrapper/Wrapper";
import "./App.css";
import { Success } from "../Success/Success";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const [suscribe, setSuscribe] = useState(false);

  return (
    <Wrapper background={!suscribe ? "bg-white" : ""}>
      {suscribe ? (
        <Success email={email} setSuscribe={setSuscribe}></Success>
      ) : (
        <div className="signup">
          <Header></Header>

          <section className="signup-info">
            <Info />

            <SuscribeForm
              setError={setError}
              setEmail={setEmail}
              error={error}
            />

            <SuscribeButton
              email={email}
              setError={setError}
              setSuscribe={setSuscribe}
            />
          </section>
        </div>
      )}
    </Wrapper>
  );
}

export default App;
