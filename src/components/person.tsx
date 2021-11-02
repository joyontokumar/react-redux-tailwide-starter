import React from 'react';
import Col from 'react-bootstrap/Col';
type PersonListProps = {
  persons: {
    pic: string;
    name: string;
    description: string;
  }[];
};
const Person = (props: PersonListProps) => {
  return (
    <>
      {props?.persons?.map((person, index) => (
        <Col lg={4} className="singe" key={index}>
          <img src={person?.pic} alt="person picture" />
          <h2>{person?.name}</h2>
          <p>{person?.description}</p>
        </Col>
      ))}
    </>
  );
};

export default Person;
