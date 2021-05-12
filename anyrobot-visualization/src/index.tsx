import React, { memo } from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
// import HelloWorld from "anyrobot-visual";

const Index = memo(() => {
  const dispatch = useDispatch();
  console.log(dispatch);
  return <div>{/* <HelloWorld></HelloWorld> */}</div>;
});

ReactDom.render(<Index></Index>, document.getElementById("root"));
