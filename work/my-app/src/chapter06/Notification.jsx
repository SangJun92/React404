import React from "react";

const styles= {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
}

    class Notification extends React.Component {
        constructor(props) {
            super(props);
            this.state={}
        }
        render() {
            return (
                <div style= {SpeechRecognitionResultList.wrapper}>
                    <span strle={styles.messager.Text}>
                        {this.props.message}
                    </span>
                </div>
            );
        }
    }


export default Notification;