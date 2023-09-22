import Button from "@/Components/Button/Button";
import Paragraph from "@/Components/Paragraph/Paragraph";
import Rating from "@/Components/Rating/Rating";
import Tag from "@/Components/Tag/Tag";
import Title from "@/Components/Title/Title";
import { withLayout } from "@/Layout/Layout";
import React, { useState } from "react";

const Home = (): JSX.Element => {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Title attr='h1'>Title h1!</Title>
      <Title attr='h2'>Title h2!</Title>
      <Title attr='h3'>Title h3!</Title>
      <Button buttonType='primary'>Primary</Button>
      <Button buttonType='ghost'>Ghost</Button>
      <Paragraph size='s'>paragrapf s</Paragraph>
      <Paragraph size='m'>paragrapf m</Paragraph>
      <Paragraph size='l'>paragrapf l</Paragraph>
      <Tag size='s' color='ghost'>
        Ghost
      </Tag>
      <Tag size='m' color='red'>
        Red
      </Tag>
      <Tag size='s' color='green'>
        Green
      </Tag>
      <Tag color='primary' size='m'>
        Green
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable />
    </>
  );
};

export default withLayout(Home);
