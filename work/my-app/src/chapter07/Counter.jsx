import React, { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

function Counter(props) {
  //   var count = 0;
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  // componentDidMount, componentDidUpdate와 비슷하게 작동
  //   useEffect(() => {
  // 브라우저 API를 사용해서 document의 title을 업데이트
  //     document.title = `총 ${count}번 클릭했습니다.`;
  //   });

  return (
    <div>
      <p>
        현재 카운터 값은 <b> {state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> +1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> -1</button>
    </div>
  );
}
export default Counter;
