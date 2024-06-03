import React from "react";

function FetchAxois(props) {
    const [temp, setTemp] = useState(true);
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [isReady, setReady] = useState(false);

    const url="http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=d9070ac6d07fab60c68b0192691cb753";

    useEffect(() => {
        
    })

    return (
        <div>
            {isReady &&
            <div>
                <p>Temperature : {temp} </p>
                <p>Description : {desc} </p>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" />
                </div>}
        </div>
    )
}

export default FetchAxois;