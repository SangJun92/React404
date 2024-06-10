import "./App.css";
import { useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { useCallback } from "react";

function App() {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&apiKey=46aea6331c6e43e5b56ed3fb9479c94b"
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    // <div className="App">
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && (
    //     <textarea rows={50} cols={210} value={JSON.stringify(data, null, 2)} />
    //   )}
    // </div>
    // <NewsList />
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}
export default App;
