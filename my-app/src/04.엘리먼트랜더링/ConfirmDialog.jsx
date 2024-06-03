import React from "react";

function Button(props) {
    return (
        <button className={`bg-${props.color}`}>
            <b>
                {props.children}
            </b>
        </button>
    )
}

function ConfirmDialog(props) {
    return (
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            <Button color='green'>확인</Button>
            {/* **태그가 아니라 컴포넌트라 대문자로 적어야 함 */}
        </div>
    )
}

export default ConfirmDialog;