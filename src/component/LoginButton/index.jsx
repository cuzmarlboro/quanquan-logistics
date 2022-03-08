import React from "react";
import { View } from "@tarojs/components";
import "./index.scss";

const LoginButton = (props) => {
  return (
    <View
      className="LoginButton"
      onClick={props.click}
      style={{ background: props.color }}
    >
      {props.test}
      {props.children}
    </View>
  );
};

export default LoginButton;
