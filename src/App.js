import React from "react";
import { Form, Input, Scope } from "@rocketseat/unform";

function App() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="name" label="Nome:" />
      <br />
      <Scope path="address">
        <Input name="street" label="Rua:" />
        <br />
        <Input name="number" label="Número:" />
        <br />
        <button type="submit">Enviar</button>
      </Scope>
    </Form>
  );
}
export default App;
