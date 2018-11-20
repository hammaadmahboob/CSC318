import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as React from "react";
import { PropertyControls, ControlType } from "framer";

interface Props {
    width: number;
    height: number;
    attachedData: string;
    styling: "global" | "feed" | "message" | "input";
    onValueChange: (value: string) => void;
    onEnterKey: (value: string) => void;

    // Global Styles
    // –––––––––––––––––––––––

    globalBG: string;
    globalFont: string;
    globalPadding: number;
    globalPaddingPerSide: boolean;
    globalPaddingTop: number;
    globalPaddingRight: number;
    globalPaddingBottom: number;
    globalPaddingLeft: number;
    globalRadius: number;
    globalRadiusPerCorner: boolean;
    globalRadiusTopLeft: number;
    globalRadiusTopRight: number;
    globalRadiusBottomRight: number;
    globalRadiusBottomLeft: number;

    // Feed Styles
    // –––––––––––––––––––––––

    feedBG: string;
    feedGap: number;
    feedPadding: number;
    feedPaddingPerSide: boolean;
    feedPaddingTop: number;
    feedPaddingRight: number;
    feedPaddingBottom: number;
    feedPaddingLeft: number;

    // Message Styles
    // –––––––––––––––––––––––

    messageUserBG: string;
    messageBotBG: string;
    messageUserColor: string;
    messageBotColor: string;
    messagePadding: number;
    messagePaddingPerSide: boolean;
    messagePaddingTop: number;
    messagePaddingRight: number;
    messagePaddingBottom: number;
    messagePaddingLeft: number;
    messageRadius: number;
    messageRadiusPerCorner: boolean;
    messageRadiusTopLeft: number;
    messageRadiusTopRight: number;
    messageRadiusBottomRight: number;
    messageRadiusBottomLeft: number;

    // Input Styles
    // –––––––––––––––––––––––

    inputBG: string;
    inputPlaceholder: string;
    inputValue: string;
    inputSize: number;
    inputMargin: number;
    inputMarginPerSide: boolean;
    inputMarginTop: number;
    inputMarginRight: number;
    inputMarginBottom: number;
    inputMarginLeft: number;
    inputSize: number;
    inputPadding: number;
    inputPaddingPerSide: boolean;
    inputPaddingTop: number;
    inputPaddingRight: number;
    inputPaddingBottom: number;
    inputPaddingLeft: number;
    inputBorder: string;
    inputBorderSize: number;
    inputRadius: number;
    inputRadiusPerCorner: boolean;
    inputRadiusTopLeft: number;
    inputRadiusTopRight: number;
    inputRadiusBottomRight: number;
    inputRadiusBottomLeft: number;
    inputShadow: string;
    inputUseAvatar: boolean;
    inputAvatar: string;
    inputAvatarSize: number;
    inputAvatarRadius: number;
    inputGap: number;
}

const date = new Date()
const timestamp = date.toLocaleString().slice(-11, -6)

const startData = {
    // This is the message that displays before interaction
    "messages": [
        {
            "sender": "bot",
            "message": "Hey $Name$, did you end up watching the Raptors game last night?",
            "stamp": "12:20 PM"
        },
        {
            "sender": "User",
            "message": "No, I couldn't find anywhere online that was showing it and I had no idea where to go to watch the show",
            "stamp": "12:40 PM"
        },
        {
            "sender": "bot",
            "message": "Oh no worries! Here, I just sent you a link to check out this group I'm in. I'm sure theres a few people we can find to watch the next game with!",
            "stamp": "12:45 PM"
        },

    

    ],
    "keywords": [
        {
            "phrase": "food",
            "returnMessage": "What type of food are you looking for?"
        },
        {
            "phrase": "weather",
            "returnMessage": "Yeah, it gets pretty chilly here in the TDot. You defintiely need to get yourself toque and mack at some point!"
        },
        {
            "phrase": "shopping",
            "returnMessage": "There's a few places you could go shopping like the Eatons Centre, but you should check out the Shopping Groups because there are some great shops all over Toronto."
        }
    ]
}

export class ChatterBot extends React.Component<Props> {
    state = {
        value: ChatterBot.defaultProps.value,
        currentValue: ChatterBot.defaultProps.value,
        setData: startData,
    }

    static defaultProps = {
        width: 240,
        height: 300,
        attachedData: "",
        styling: "global",

        // Global Styles
        // –––––––––––––––––––––––

        globalBG: "#FFFFFF",
        globalColor: "#333333",
        globalFont: "500 12px/18px SF Pro Text",
        globalPadding: 0,
        globalPaddingPerSide: false,
        globalPaddingTop: 0,
        globalPaddingRight: 0,
        globalPaddingBottom: 0,
        globalPaddingLeft: 0,
        globalRadius: 6,
        globalRadiusPerCorner: false,
        globalRadiusTopLeft: 0,
        globalRadiusTopRight: 0,
        globalRadiusBottomRight: 0,
        globalRadiusBottomLeft: 0,

        // Feed Styles
        // –––––––––––––––––––––––

        feedBG: "transparent",
        feedGap: 9,
        feedPadding: 9,
        feedPaddingPerSide: false,
        feedPaddingTop: 0,
        feedPaddingRight: 0,
        feedPaddingBottom: 0,
        feedPaddingLeft: 0,

        // Message Styles
        // –––––––––––––––––––––––

        messageUserBG: "#F1EFF6",
        messageBotBG: "#665E78",
        messageUserColor: "#333333",
        messageBotColor: "#FFFFFF",
        messagePadding: 0,
        messagePaddingPerSide: true,
        messagePaddingTop: 3,
        messagePaddingRight: 6,
        messagePaddingBottom: 3,
        messagePaddingLeft: 6,
        messageRadius: 6,
        messageRadiusPerCorner: false,
        messageRadiusTopLeft: 0,
        messageRadiusTopRight: 0,
        messageRadiusBottomRight: 0,
        messageRadiusBottomLeft: 0,

        // Input Styles
        // –––––––––––––––––––––––

        inputBG: "#FFFFFF",
        inputPlaceholder: "Say hi...",
        value: "",
        inputSize: 36,
        inputMargin: 9,
        inputMarginPerSide: false,
        inputMarginTop: 0,
        inputMarginRight: 0,
        inputMarginBottom: 0,
        inputMarginLeft: 0,
        inputPadding: 9,
        inputPaddingPerSide: false,
        inputPaddingTop: 0,
        inputPaddingRight: 0,
        inputPaddingBottom: 0,
        inputPaddingLeft: 0,
        inputBorder: "#E5E5E5",
        inputBorderSize: 1,
        inputRadius: 6,
        inputRadiusPerCorner: false,
        inputRadiusTopLeft: 0,
        inputRadiusTopRight: 0,
        inputRadiusBottomRight: 0,
        inputRadiusBottomLeft: 0,
        inputShadow: "0 -6px 12px rgba(0,0,0, 0.05)",
        inputUseAvatar: true,
        inputAvatar: "https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg",
        inputAvatarSize: 24,
        inputAvatarRadius: 100,
        inputGap: 6,
    }
    static propertyControls: PropertyControls = {
        attachedData: { type: ControlType.File, allowedFileTypes: ['json'], title: 'Attach Data' },
        styling: {
            type: ControlType.Enum,
            options: ["global", "feed", "message", "input"],
            optionTitles: ["Global Style", "Feed Style", "Message Style", "Input Style"],
            title: "Styling"
        },

        // Global Styles
        // –––––––––––––––––––––––

        globalBG: {
            type: ControlType.Color,
            title: "Background",
            hidden(props) {
                return props.styling !== "global"
            }
        },
        globalColor: {
            type: ControlType.Color,
            title: "Text",
            hidden(props) {
                return props.styling !== "global"
            }
        },
        globalFont: {
            type: ControlType.String,
            placeholder: "Enter CSS Font",
            title: "Font",
            hidden(props) {
                return props.styling !== "global"
            }
        },
        globalPadding: {
            type: ControlType.FusedNumber,
            toggleKey: "globalPaddingPerSide",
            toggleTitles: ["All Sides", "Per Side"],
            valueKeys: ["globalPaddingTop", "globalPaddingRight", "globalPaddingBottom", "globalPaddingLeft"],
            valueLabels: ["T", "R", "B", "L"],
            min: 0,
            title: "Padding",
            hidden(props) {
                return props.styling !== "global"
            }
        },
        globalRadius: {
            type: ControlType.FusedNumber,
            toggleKey: "globalRadiusPerCorner",
            toggleTitles: ["All Sides", "Per Corner"],
            valueKeys: ["globalRadiusTopLeft", "globalRadiusTopRight", "globalRadiusBottomRight", "globalRadiusBottomLeft"],
            valueLabels: ["TL", "TR", "BR", "BL"],
            min: 0,
            title: "Radius",
            hidden(props) {
                return props.styling !== "global"
            }
        },

        // Feed Styles
        // –––––––––––––––––––––––

        feedBG: {
            type: ControlType.Color,
            title: "Background",
            hidden(props) {
                return props.styling !== "feed"
            }
        },
        feedGap: {
            type: ControlType.Number,
            min: 0,
            title: "Gap",
            hidden(props) {
                return props.styling !== "feed"
            }
        },
        feedPadding: {
            type: ControlType.FusedNumber,
            toggleKey: "feedPaddingPerSide",
            toggleTitles: ["All Sides", "Per Side"],
            valueKeys: ["feedPaddingTop", "feedPaddingRight", "feedPaddingBottom", "feedPaddingLeft"],
            valueLabels: ["T", "R", "B", "L"],
            min: 0,
            title: "Padding",
            hidden(props) {
                return props.styling !== "feed"
            }
        },

        // Message Styles
        // –––––––––––––––––––––––

        messageUserBG: {
            type: ControlType.Color,
            title: "User BG",
            hidden(props) {
                return props.styling !== "message"
            }
        },
        messageUserColor: {
            type: ControlType.Color,
            title: "User Text",
            hidden(props) {
                return props.styling !== "message"
            }
        },
        messageBotBG: {
            type: ControlType.Color,
            title: "Bot BG",
            hidden(props) {
                return props.styling !== "message"
            }
        },
        messageBotColor: {
            type: ControlType.Color,
            title: "Bot Text",
            hidden(props) {
                return props.styling !== "message"
            }
        },
        messagePadding: {
            type: ControlType.FusedNumber,
            toggleKey: "messagePaddingPerSide",
            toggleTitles: ["All Sides", "Per Side"],
            valueKeys: ["messagePaddingTop", "messagePaddingRight", "messagePaddingBottom", "messagePaddingLeft"],
            valueLabels: ["T", "R", "B", "L"],
            min: 0,
            title: "Padding",
            hidden(props) {
                return props.styling !== "message"
            }
        },
        messageRadius: {
            type: ControlType.FusedNumber,
            toggleKey: "messageRadiusPerCorner",
            toggleTitles: ["All Sides", "Per Corner"],
            valueKeys: ["messageRadiusTopLeft", "messageRadiusTopRight", "messageRadiusBottomRight", "messageRadiusBottomLeft"],
            valueLabels: ["TL", "TR", "BR", "BL"],
            min: 0,
            title: "Radius",
            hidden(props) {
                return props.styling !== "message"
            }
        },

        // Input Styles
        // –––––––––––––––––––––––

        inputBG: {
            type: ControlType.Color,
            title: "Background",
            hidden(props) {
                return props.styling !== "input"
            }
        },
        inputPlaceholder: {
            type: ControlType.String,
            placeholder: "Add a placeholder",
            title: "Placeholder",
            hidden(props) {
                return props.styling !== "input"
            }
        },
        value: {
            type: ControlType.String,
            placeholder: "Add a value",
            title: "Value",
            hidden(props) {
                return props.styling !== "input"
            }
        },
        inputSize: {
            type: ControlType.Number,
            min: 0,
            title: "Size",
            hidden(props) {
                return props.styling !== "input"
            }
        },
        inputBorder: {
            type: ControlType.Color,
            title: "Border",
            hidden(props) {
                return props.styling !== "input"
            }
        },
        inputBorderSize: {
            type: ControlType.Number,
            min: 0,
            title: "Border Size",
            hidden(props) {
                return props.styling !== "input"
            }
        },
        inputRadius: {
            type: ControlType.FusedNumber,
            toggleKey: "inputRadiusPerCorner",
            toggleTitles: ["All Sides", "Per Corner"],
            valueKeys: ["inputCornerTop", "inputCornerRight", "inputCornerBottom", "inputCornerLeft"],
            valueLabels: ["TR", "TL", "BR", "BL"],
            min: 0,
            title: "Radius",
            hidden(props) {
                return props.styling !== "input"
            }
        },
        inputPadding: {
            type: ControlType.FusedNumber,
            toggleKey: "inputPaddingPerSide",
            toggleTitles: ["All Sides", "Per Side"],
            valueKeys: ["inputPaddingTop", "inputPaddingRight", "inputPaddingBottom", "inputPaddingLeft"],
            valueLabels: ["T", "R", "B", "L"],
            min: 0,
            title: "Padding",
            hidden(props) {
                return props.styling !== "input"
            }
        },
        inputMargin: {
            type: ControlType.FusedNumber,
            toggleKey: "inputMarginPerSide",
            toggleTitles: ["All Sides", "Per Side"],
            valueKeys: ["inputMarginTop", "inputMarginRight", "inputMarginBottom", "inputMarginLeft"],
            valueLabels: ["T", "R", "B", "L"],
            min: 0,
            title: "Margin",
            hidden(props) {
                return props.styling !== "input"
            }
        },
        inputShadow: {
            type: ControlType.String,
            placeholder: "Enter CSS box-shadow",
            title: "Shadow",
            hidden(props) {
                return props.styling !== "input"
            }
        },
        inputUseAvatar: {
            type: ControlType.Boolean,
            disabledTitle: "No",
            enabledTitle: "Yes",
            title: "Use Avatar?",
            hidden(props) {
                return props.styling !== "input"
            }
        },
        inputAvatar: {
            type: ControlType.String,
            placeholder: "Enter an image URL",
            title: "Avatar",
            hidden(props) {
                return !props.inputUseAvatar || (props.styling !== "input")
            }
        },
        inputAvatarSize: {
            type: ControlType.Number,
            min: 0,
            title: "Size",
            hidden(props) {
                return !props.inputUseAvatar || (props.styling !== "input")
            }
        },
        inputAvatarRadius: {
            type: ControlType.Number,
            min: 0,
            title: "Radius",
            hidden(props) {
                return !props.inputUseAvatar || (props.styling !== "input")
            }
        },
        inputGap: {
            type: ControlType.Number,
            min: 0,
            title: "Gap",
            hidden(props) {
                return !props.inputUseAvatar || props.styling !== "input"
            }
        },
    }
    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        const { value } = nextProps
        const { currentValue } = prevState
        if (value !== currentValue) {
            return { value, currentValue: value }
        }
        return null
    }

    fetchData() {
        fetch(this.props.attachedData)
            .then((resp) => resp.json())
            .then(data => { this.setState({ setData: data }) })
    }
    componentDidUpdate(prevProps) {
        if (this.props.attachedData !== prevProps.attachedData) {
            const dataSource = this.props.attachedData ? this.props.attachedData : startData
            if dataSource !== startData {
                this.fetchData()
            } else {
                this.setState({ setData: startData })
            }
        }
    }

    onChange = (event) => {
        const element = event.nativeEvent.target
        const value = element.value
        this.setState({ value: value, currentValue: value })
        if (this.props.onValueChange) this.props.onValueChange(value)
    }
    onEnterKey = (event) => {
        // Enter Key Pressed
        if (event.nativeEvent.keyCode === 13) {
            const value = event.nativeEvent.target.value

            if (value !== "") {
                this.handleMessage("user", value, true)
                if (this.props.onEnterKey) this.props.onEnterKey(value)
            } else {
                null
            }
        }
    }

    handleMessage(sender, value, shouldCheck) {
        const date = new Date()
        const timestamp = date.toLocaleString().slice(-11, -6)
        this.setState({
            value: "",
            currentValue: "",
            setData: {
                "messages": [
                    ...this.state.setData.messages,
                    {
                        "sender": sender === "bot" ? "bot" : "user",
                        "message": value,
                        "stamp": timestamp
                    }
                ],
                "keywords": [
                    ...this.state.setData.keywords
                ]
            }
        })
        if (shouldCheck) this.checkKeywords(value)
    }
    checkKeywords(value) {
        this.state.setData.keywords.forEach((item) => {
            setTimeout(() => {
                const valueLowercase = value.toLowerCase()
                const phraseLowercase = item.phrase.toLowerCase()
                if valueLowercase.indexOf(phraseLowercase) > -1 {
                    this.handleMessage("bot", item.returnMessage, false)
                }
            }, 1500)
        })
    }

    render() {

        const {
            width,
            height,
            globalBG,
            globalColor,
            globalFont,
            globalPadding,
            globalPaddingPerSide,
            globalPaddingTop,
            globalPaddingRight,
            globalPaddingBottom,
            globalPaddingLeft,
            globalRadius,
            globalRadiusPerCorner,
            globalRadiusTopLeft,
            globalRadiusTopRight,
            globalRadiusBottomRight,
            globalRadiusBottomLeft,
            feedBG,
            feedGap,
            feedPadding,
            feedPaddingPerSide,
            feedPaddingTop,
            feedPaddingRight,
            feedPaddingBottom,
            feedPaddingLeft,
            messageUserBG,
            messageBotBG,
            messageUserColor,
            messageBotColor,
            messagePadding,
            messagePaddingPerSide,
            messagePaddingTop,
            messagePaddingRight,
            messagePaddingBottom,
            messagePaddingLeft,
            messageRadius,
            messageRadiusPerCorner,
            messageRadiusTopLeft,
            messageRadiusTopRight,
            messageRadiusBottomRight,
            messageRadiusBottomLeft,
            inputBG,
            inputSize,
            inputPlaceholder,
            inputMargin,
            inputMarginPerSide,
            inputMarginTop,
            inputMarginRight,
            inputMarginBottom,
            inputMarginLeft,
            inputPadding,
            inputPaddingPerSide,
            inputPaddingTop,
            inputPaddingRight,
            inputPaddingBottom,
            inputPaddingLeft,
            inputBorder,
            inputBorderSize,
            inputRadius,
            inputRadiusPerCorner,
            inputRadiusTopLeft,
            inputRadiusTopRight,
            inputRadiusBottomRight,
            inputRadiusBottomLeft,
            inputShadow,
            inputUseAvatar,
            inputAvatar,
            inputAvatarSize,
            inputAvatarRadius,
            inputGap,
        } = this.props
        const { value, setData } = this.state

        const containerStyle: React.CSSProperties = {
            width: width,
            height: height,
            background: globalBG,
            color: globalColor,
            paddingTop: globalPaddingPerSide ? globalPaddingTop : globalPadding,
            paddingRight: globalPaddingPerSide ? globalPaddingRight : globalPadding,
            paddingBottom: globalPaddingPerSide ? globalPaddingBottom : globalPadding,
            paddingLeft: globalPaddingPerSide ? globalPaddingLeft : globalPadding,
            borderTopLeftRadius: globalRadiusPerCorner ? globalRadiusTopLeft : globalRadius,
            borderTopRightRadius: globalRadiusPerCorner ? globalRadiusTopRight : globalRadius,
            borderBottomRightRadius: globalRadiusPerCorner ? globalRadiusBottomRight : globalRadius,
            borderBottomLeftRadius: globalRadiusPerCorner ? globalRadiusBottomLeft : globalRadius,
            overflow: "hidden",
            // Flex Styling
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            // Font Styling
            font: globalFont,
        }
        const listStyle: React.CSSProperties = {
            width: "100%",
            flexGrow: 1,
            listStyle: "none",
            overflowY: "scroll",
            overflowX: "hidden",
            margin: 0,
            padding: 0,
            background: feedBG,
            paddingTop: feedPaddingPerSide ? feedPaddingTop : feedPadding,
            paddingRight: feedPaddingPerSide ? feedPaddingRight : feedPadding,
            paddingBottom: feedPaddingPerSide ? feedPaddingBottom : feedPadding,
            paddingLeft: feedPaddingPerSide ? feedPaddingLeft : feedPadding,
        }
        const messageStyle: React.CSSProperties = {
            display: "inline-block",
            margin: 0,
            paddingTop: messagePaddingPerSide ? messagePaddingTop : messagePadding,
            paddingRight: messagePaddingPerSide ? messagePaddingRight : messagePadding,
            paddingBottom: messagePaddingPerSide ? messagePaddingBottom : messagePadding,
            paddingLeft: messagePaddingPerSide ? messagePaddingLeft : messagePadding,
            borderTopLeftRadius: messageRadiusPerCorner ? messageRadiusTopRight : messageRadius,
            borderTopRightRadius: messageRadiusPerCorner ? messageRadiusTopLeft : messageRadius,
            borderBottomRightRadius: messageRadiusPerCorner ? messageRadiusBottomRight : messageRadius,
            borderBottomLeftRadius: messageRadiusPerCorner ? messageRadiusBottomLeft : messageRadius,
        }
        const inputContainerStyle: React.CSSProperties = {
            width: "100%",
            height: "auto",
            background: inputBG,
            paddingTop: inputMarginPerSide ? inputMarginTop : inputMargin,
            paddingRight: inputMarginPerSide ? inputMarginRight : inputMargin,
            paddingBottom: inputMarginPerSide ? inputMarginBottom : inputMargin,
            paddingLeft: inputMarginPerSide ? inputMarginLeft : inputMargin,
            boxShadow: inputShadow,
            // Flex Styling
            flexShrink: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }
        const inputAvatarStyle: React.CSSProperties = {
            borderRadius: inputAvatarRadius,
            marginRight: inputGap,
            display: inputUseAvatar ? "block" : "none"
        }
        const inputStyle: React.CSSProperties = {
            width: "100%",
            height: inputSize,
            background: "transparent",
            color: globalColor,
            borderTopLeftRadius: inputRadiusPerCorner ? inputRadiusTop : inputRadius,
            borderTopRightRadius: inputRadiusPerCorner ? inputRadiusRight : inputRadius,
            borderBottomRightRadius: inputRadiusPerCorner ? inputRadiusBottom : inputRadius,
            borderBottomLeftRadius: inputRadiusPerCorner ? inputRadiusLeft : inputRadius,
            paddingTop: inputPaddingPerSide ? inputPaddingTop : inputPadding,
            paddingRight: inputPaddingPerSide ? inputPaddingRight : inputPadding,
            paddingBottom: inputPaddingPerSide ? inputPaddingBottom : inputPadding,
            paddingLeft: inputPaddingPerSide ? inputPaddingLeft : inputPadding,
            borderColor: inputBorder,
            borderWidth: inputBorderSize,
            margin: 0,
            borderWidth: inputBorderSize,
            borderStyle: "solid",
            boxSizing: "border-box",
            verticalAlign: "top",
            outline: "none",
            font: globalFont,
        }

        function MessageList(props) {
            const messages = props.messages;
            const list = messages.map((message, index) =>
                <li
                    key={index}
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: message.sender === "bot" ? "row" : "row-reverse",
                        marginBottom: index === messages.length ? 0 : feedGap,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: message.sender === "bot" ? "flex-start" : "flex-end",

                        }}>
                        <div
                            style={{
                                ...messageStyle,
                                background: message.sender === "bot" ? messageBotBG : messageUserBG,
                                color: message.sender === "bot" ? messageBotColor : messageUserColor,
                            }}
                        >
                            {message.message}
                        </div>
                        <span style={{ fontSize: 9, lineHeight: "15px", opacity: 0.3 }}>{message.stamp}</span>
                    </div>
                </li>
            );
            return (
                <ul style={listStyle}>{list}</ul>
            );
        }

        return (
            <div style={containerStyle}>
                <MessageList messages={setData.messages} />
                <div style={inputContainerStyle}>
                    <img
                        src={inputAvatar}
                        width={inputAvatarSize}
                        height={inputAvatarSize}
                        style={inputAvatarStyle}
                    />
                    <input
                        type={"text"}
                        placeholder={inputPlaceholder}
                        value={value}
                        onChange={this.onChange}
                        onKeyPress={this.onEnterKey}
                        style={inputStyle}
                    />
                </div>
            </div>
        );
    }
}
