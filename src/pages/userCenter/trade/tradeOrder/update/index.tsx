 
import "@nutui/nutui-biz/dist/styles/demo.css";
import '@nutui/nutui-biz/dist/style.css'
import '@nutui/nutui-react/dist/style.css'

import React, { useState } from 'react';
import { OrderRemark } from '@nutui/nutui-biz';
import { Cell, Toast } from '@nutui/nutui-react';
import "@nutui/nutui-biz/dist/styles/demo.css";
const App = () => {
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState('');
  return (
    <div className="demo order-remark-demo">
      <Cell onClick={(e) => setShow(true)} title="订单备注" desc={mark ? mark : '请输入备注信息'}></Cell>
      <OrderRemark
        visible={show}
        remark={mark}
        onClose={(e) => {
          setShow(false);
        }}
        onSubmit={(e) => {
          setMark(e);
        }}></OrderRemark>
    </div>
  );
};
export default App;