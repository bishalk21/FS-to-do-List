import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //uuid

const initialState = {
  task: "",
  hours: "",
  type: "entry",
};

export const TaskForm = ({ addTask }) => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    // console.log(form);
    setForm({ ...form, [name]: value }); //square bracket converts key to variable
    //square brackets are used to access the property of an object
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    addTask({ ...form, id: uuidv4() });
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="g-2">
        <Col md="6">
          <Form.Control
            name="task"
            placeholder="Task Name"
            required
            onChange={handleOnChange}
            l
          />
        </Col>
        <Col md="3">
          <Form.Control
            name="hours"
            placeholder="10"
            type="number"
            required
            onChange={handleOnChange}
          />
        </Col>
        <Col md="3">
          <Button type="submit" variant="success">
            {" "}
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,

//nums is an array of integers, target is an integer
// twoSum is a function that takes in an array of integers and an integer
var twoSum = function (nums, target) {};
