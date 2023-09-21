import Button from "@/Components/Button/Button";
import Title from "@/Components/Title/Title";
import React from "react";

const Home = (): JSX.Element => {
  return (
    <>
      <Title attr='h1'>Title h1!</Title>
      <Title attr='h2'>Title h2!</Title>
      <Title attr='h3'>Title h3!</Title>
      <Button buttonType='primary'>Primary</Button>
      <Button buttonType='ghost'>Ghost</Button>
    </>
  );
};

export default Home;
