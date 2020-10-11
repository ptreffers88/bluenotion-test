import React from "react";

import { Button } from "../button/button";

const Register = (): JSX.Element => {
  const handleRegister = () => {
    alert("Registeer eenvoudig en snel!");
  };
  return (
    <div>
      <p>Nog geen account?</p>
      <Button link="" title="Vraag naar de mogelijkheden" variant="tertiary" onClick={handleRegister} />
    </div>
  );
};

export { Register };
