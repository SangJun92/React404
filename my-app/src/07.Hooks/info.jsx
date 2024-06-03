import React, {useEffect, useReducer, useState} from "react";
import useInputs from "./useInputs";

// function reducer(state, action){
//     return {
//         ...state,
//         [action.name] : action.value
//     };
// }
// -> useInputs에 추가함

function Info() {
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');
    const [state, onChange] = useInputs({
        name:'',
        nickname:'',
        phone:'',
    });

    const {name, nickname, phone} = state;

    // const onChange = e => {
    //     dispatch(e.target);
    // }

    useEffect( () => {
        console.log("랜더링 완료");
        console.log({name, nickname});
        return () => {
            console.log('cleanup');
            console.log(name);
            // 컴포넌트가 마운트 해제되기 전에 실행
        }
    }, [])
    // 컴포넌트가 마운트 된 이후,
    // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행
    // 빈 배열을 넣으면 mount, unmount 시에 단 한 번씩만 실행
    // 배열을 생략하면 랜더링이 바뀔 때마다 실행

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // };

    return (
        <div>
            <div>
                {/* <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} /> */}
                <input name="name" value={name} onChange={onChange}/>
                <br></br>
                <input name="nickname" value={nickname} onChange={onChange}/>
                <br></br>
                <input name="phone" value={phone} onChange={onChange}/>
            </div>
            <div><b>이름 : </b>{name}</div>
            <div><b>닉네임 : </b>{nickname}</div>
            <div><b>전화번호 : </b>{phone}</div>
        </div>
    )
}

export default Info;