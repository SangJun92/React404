import React from "react";
import Card from "./Card";

function ProfileCard(props) {

    return(
        <Card title="Seo SangJun" backgroundColor="#4ea04e">
            <p>안녕하세요, 상준입니다.</p>
            <p><b>저는 리액트를 사용해서 개발하고 있습니다. 너무 어렵습니다.</b></p>
        </Card>
    );
}

export default ProfileCard;