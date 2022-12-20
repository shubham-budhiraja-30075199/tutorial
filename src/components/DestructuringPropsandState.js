import React from "react";

// const DestructuringPropsandState = ({name,company}) => {
const DestructuringPropsandState = (props) => {
  const { name, company } = props;
  return (
    <>
      <h3>Destructuring Props & States</h3>
      <ul>
        <li>
          There are two ways of destructutring props in function based component
        </li>
        <li>
          First is, by passing the props as function arguments enclosed in curly
          braces. Ex: {"{name,company}"}
        </li>
        {/* <li>Example for first method: {name} - {company}</li> */}
        <li>
          Second is, by destruturing it in the function body itself (check out
          the Destructuring component).
        </li>
        <li>
          {name} - {company}
        </li>
        <li>
          <strong>
            For destructutring, it is necessary to use the same name as passed
            in App.js or any file where the props are defined.
          </strong>
        </li>
        <li>
          In class components, we can destructure the props using the following
          statement inside the render method:{" "}
          <strong>{"const {name, company} = this.props;"}</strong>. Same thing
          is for states.
        </li>
      </ul>
    </>
  );
};

export default DestructuringPropsandState;
