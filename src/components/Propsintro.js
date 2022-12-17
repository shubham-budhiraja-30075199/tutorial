import React from "react";

const Propsintro = (props) => {
  console.log(props);
  return (
    <>
      <h3>Props</h3>
      <ul>
        <li>
          Props are passed during function declaration only. Refer{" "}
          <strong>Propsintro</strong> component
        </li>
        <li>
          It is a convention not a rule to use the argument in JSX function as{" "}
          <strong>props</strong>, we can use any name.
        </li>
        <li>
          Ex: My name is {props.name}. I work at {props.company}.
        </li>
        <li>{props.children}</li>
        <li>
          In class components, we don't pass <strong>props</strong> as an
          argument in the JSX function. Instead, we use <strong>this</strong> keyword.
        </li>
        <li>Ex: In this case, if we had used a class component then we'd use <strong>this.props.name</strong> to get name and <strong>this.props.company</strong> to get company name.</li>
        <li><strong>Props are immutable</strong></li>
      </ul>
    </>
  );
};

export default Propsintro;
