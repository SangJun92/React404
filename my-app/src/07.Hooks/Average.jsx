import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = numbers => {
    console.log("평균값 계산 중");

    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

function Average(props) {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);
    // useRef를 사용하여 Average 컴퍼넌트에서 등록 버튼 클릭 시 포커스가 자동으로 input에 맞춤 
    // useRef : 레퍼런스를 사용하기 위한 훅
    // useRef() 혹은 레퍼런스 객체(ref object)를 반환함
    // .current라는 속성은 현재 레퍼런스(참조)하고 있는 엘리먼트를 의미
    // 사용법 : refContainer = useRef(초기값);
    // useRef() Hook은 내부의 데이터가 변경되었을 때 별도로 알리지 않음

    // const onChange = e => {
    //     setNumber(e.target.value);
    // };

    // const onInsert = e => {
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('');
    // }

    // useCallback : hook과 유사하지만 값이 아닌 함수를 반환
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 랜더링 될 때만 함수 생성

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); // number 혹은 list가 변경될 때만 함수 생성

    // useMemo 적용 전 : 숫자 입력과 등록에 getAverage() 함수 적용
    // -> 입력만 해도 랜더링이 됨
    const avg = useMemo(() => getAverage(list), [list]);
    // useMemo Hook 적용 후
    // : 랜더링 하는 과정에 특정 값이 변경되었을 때만 연산을 수행, 연산 최적화가 됨

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div><b>평균값 : </b>{avg}</div>
        </div>
    )

}

export default Average;