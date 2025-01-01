import  React from "react";
import { AddressList } from '@nutui/nutui-biz';

import "@nutui/nutui-biz/dist/styles/demo.css";
import '@nutui/nutui-biz/dist/style.css'
import '@nutui/nutui-react/dist/style.css'

const App = () => {
  const data = [
    {
      id: 3,
      testaddressName: '姓名',
      phone: '123****4567',
      defaultAddress: false,
      fullAddress: '北京亦庄经济技术开发区科创十一街18号院'
    },
    {
      id: 4,
      testaddressName: '姓名',
      phone: '123****4567',
      defaultAddress: true,
      fullAddress: '北京亦庄经济技术开发区科创十一街18号院'
    }
  ];
  
  const dataMapOptions = {
    id: 'testid',
    addressDetail: 'testaddressDetail',
    addressName: 'testaddressName'
  };

  const itemClick = () => {
    console.log('Click To Address');
  }

  const delClick = () => {
    console.log('Click To Delete');
  }

  const editClick = () => {
    console.log('Click To Edit');
  }

  const addAddress = ()=>{
    console.log('Click To Add');
  }

  return (
    <AddressList
      data={data}
      showBottomButton={true}
      dataMapOptions={dataMapOptions}
      swipeEdition={true}
      onDelIcon={delClick}
      onEditIcon={editClick}
      onItemClick={itemClick}
      onAdd={addAddress}
      onSwipeDel={delClick}
    />
  );
};
export default App;