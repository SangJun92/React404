import React from "react";
import * as doAsync from "./doAsync";

function AsyncTaskEx(props) {
  const onPrintMe = () => {
    setTimeout(doAsync.printMe, 3000);
    console.log("대기중");
  };

  const onCallback = () => {
    console.log("작업시작");
    doAsync.increseCallback(0, (result) => {
      console.log(result);
      doAsync.increseCallback(result, (result) => {
        console.log(result);
        doAsync.increseCallback(result, (result) => {
          console.log(result);
          doAsync.increseCallback(result, (result) => {
            console.log(result);
            doAsync.increseCallback(result, (result) => {
              console.log(result);
            });
          });
        });
      });
    });
    console.log("작업종료");
  };

  const onPromise = () => {
    doAsync
      .increasePromise(0)
      .then((number) => {
        console.log(number);
        return doAsync.increasePromise(number);
      })
      .then((number) => {
        console.log(number);
        return doAsync.increasePromise(number);
      })
      .then((number) => {
        console.log(number);
        return doAsync.increasePromise(number);
      })
      .then((number) => {
        console.log(number);
        return doAsync.increasePromise(number);
      })
      .then((number) => {
        console.log(number);
        return doAsync.increasePromise(number);
      })
      .catch((e) => {
        //에러가 발생한다면 catch를 통해 알 수 있음
        console.error(e);
      });
  };

  const onAsyncAwaite = async() => { // async function onAsyncAwait() {}
    try {
      let result = await doAsync.increaseAsync(0);
      console.log(result);
      result = await doAsync.increaseAsync(result);
      console.log(result);
      result = await doAsync.increaseAsync(result);
      console.log(result);
      result = await doAsync.increaseAsync(result);
      console.log(result);
      result = await doAsync.increaseAsync(result);
      console.log(result);
      result = await doAsync.increaseAsync(result);
      console.log(result);
    } catch(e) {
      console.error(e);
    }
  }
  
  return (
    <div>
      <button onClick={onPrintMe}>printme</button>
      <button onClick={onCallback}>callback</button>
      <button onClick={onPromise}>promise</button>
      <button onClick={onAsyncAwaite}>async_awaite</button>
    </div>
  );
}
export default AsyncTaskEx;
