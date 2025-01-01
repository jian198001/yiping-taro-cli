import  React from 'react';
import { SettleBar } from '@nutui/nutui-biz';
import { Toast } from '@nutui/nutui-react';
import "@nutui/nutui-biz/dist/styles/demo.css";

import "@nutui/nutui-biz/dist/styles/demo.css";
import '@nutui/nutui-biz/dist/style.css'
import '@nutui/nutui-react/dist/style.css'

const App = () => {
  return (
    <div className="demo">
      <SettleBar 
        total={100}
        settleCount="100" 
        onClickButton ={() => Toast.text('点击按钮')}
      />
    </div>
  );
};
export default App;
