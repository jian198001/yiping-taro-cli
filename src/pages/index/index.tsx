import "@nutui/nutui-biz/dist/styles/demo.css";
import * as ReactDOM from "react-dom";
import '@nutui/nutui-biz/dist/style.css'
import '@nutui/nutui-react/dist/style.css'
 
import  React,{useEffect,useState} from 'react';
import { Category } from '@nutui/nutui-biz';

const App = () => {
	const [category, setCategory] = useState();
  const getData = () => {
    fetch("https://storage.360buyimg.com/nutui/3x/new-categoryData.js")
      .then((response) => response.json())
      .then((res) => {
        setCategory(res.categoryInfo.category)
      })
      .catch((err) => console.log("Oh, error", err));
  };

  const onClassifyClick = (index:number)=>{
    console.log('一级分类',index)
  }

  const onPanelThirdClick = (sku:any)=>{
    console.log('三级分类跳转', sku)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Category category={category} onClick={onClassifyClick} onPanelThirdClick={onPanelThirdClick}></Category>
  );
};
export default App;
