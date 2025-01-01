
import  React,{useEffect,useState} from 'react';
import { Category } from '@nutui/nutui-biz';

import "@nutui/nutui-biz/dist/styles/demo.css";
import '@nutui/nutui-biz/dist/style.css'
import '@nutui/nutui-react/dist/style.css'

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

  useEffect(() => {
    getData();
  }, []);

  return (
     <Category category={category} showSecondLevelQuickNav={true} ></Category>
  );
};
export default App;
