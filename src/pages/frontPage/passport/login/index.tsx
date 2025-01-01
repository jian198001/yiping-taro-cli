import React, { useState, useEffect } from "react";
import { Login } from '@nutui/nutui-biz';

import "@nutui/nutui-biz/dist/styles/demo.css";
import '@nutui/nutui-biz/dist/style.css'
import '@nutui/nutui-react/dist/style.css'

const App = () => {
  const logoImg =
    "https://img10.360buyimg.com/imagetools/jfs/t1/187998/28/32123/16333/63e346b8F0bff354b/c95da99ea108c463.png";
  const [formParams3, setformParams3] = useState({
    account: "12345",
    accountErrorText: "账号不存在",
    password: "123",
    passwordErrorText: "请输入6位密码",
  });
  const onChange = (value: any, tag: string) => {
    console.log(tag, value);
  };

  return (
     <Login
        formParams={formParams3}
        logo={logoImg}
        loginType="pwd"
        showErrorType="bottomMsg"
        onInputChange={onChange}
        />
  );
};
export default App;