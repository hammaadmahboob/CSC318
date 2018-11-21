import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as Canvas from "./canvas";
const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    overflow: "hidden",
};

// Define type of property
interface Props {
    text: string;
    padding: number;
    paddingPerSide: boolean;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    paddingLeft: number;
    fontSize: number;
    margin: number;
    fontColor: color;
    bgColor: color;
    align: string;
    borderSize: number;
    borderColor: color;
    borderRadius: number;
    tags: string;
}


export class Tags extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        //Default width
        width: 320,
        //Default height
        height: 80,
        //Font size of the tags
        fontSize: 12,
        //Margin between the tags
        margin: 4,
        //Background color of the tags
        bgColor: "#000000",
        hoverbgColor: "#FAE900",
        downbgColor: "#FAC000",
        disablebgColor: "#EDEDED",
        //Font color of the tags
        fontColor: "#ffffff",
        hoverfontColor: "#000000",
        downfontColor: "#000000",
        disablefontColor: "#8F8F8F",
        //Component alignment
        align: "Center",
        //Border radius of the tags
        borderSize: 1,
        //Border color of the tags
        borderColor: "rgba(0,0,0,0)",
        hoverborderColor: "#DACC07",
        downborderColor: "rgba(0,0,0,0)",
        disableborderColor: "rgba(0,0,0,0)",
        //Radius of the tags
        borderRadius: 100,
        //Paddings
        padding: 0,
        paddingPerSide: true,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        //Tags list
        tags: "Design, UI, UX, FramerX, Prototyping, Motion, Illustration",
        //Separator
        separator: ",",
        tagState: "state1";
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        tags: { type: ControlType.String, title: "Tags" },
        separator: { type: ControlType.String, title: "Separator" },
        align: {
            type: ControlType.SegmentedEnum,
            title: "Align",
            options: ["Left", "Center", "Right"],
        },
        margin: { type: ControlType.Number, title: "Margin", min: 0 },
        padding: {
            type: ControlType.FusedNumber,
            toggleKey: "paddingPerSide",
            toggleTitles: ["Padding", "Padding per Side"],
            valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
            valueLabels: ["T", "R", "B", "L"],
            min: 0,
            title: "Padding"
        },


        fontSize: { type: ControlType.Number, title: "Font Size", min: 4, max: 96 },
        borderSize: { type: ControlType.Number, title: "Border Size", max: 2, min: 0, step: 0.5 },
        borderRadius: { type: ControlType.Number, title: "Radius", min: 0 },

        tagState: {
            type: ControlType.Enum,
            options: ["state1", "state2", "state3", "state4"],
            optionTitles: ["Default", "Hover", "Down", "Disabled"],
            title: "Tag State"
        },


        //Default
        fontColor: {
            type: ControlType.Color,
            title: "Font Color",
            hidden(props) {
                if (props.tagState == "state1") {
                    return false
                } else {
                    return true
                }
            }
        },

        bgColor: {
            type: ControlType.Color,
            title: "Tags Color",
            hidden(props) {
                if (props.tagState == "state1") {
                    return false
                } else {
                    return true
                }
            }
        },

        borderColor: {
            type: ControlType.Color,
            title: "Border Color",
            hidden(props) {
                if (props.tagState == "state1") {
                    return false
                } else {
                    return true
                }
            }
        },

        /// Hover
        hoverfontColor: {
            type: ControlType.Color,
            title: "Font Color",
            hidden(props) {
                if (props.tagState == "state2") {
                    return false;
                } else {
                    return true;
                }
            }
        },

        hoverbgColor: {
            type: ControlType.Color,
            title: "Tags Color",
            hidden(props) {
                if (props.tagState == "state2") {
                    return false;
                } else {
                    return true;
                }
            }
        },

        hoverborderColor: {
            type: ControlType.Color,
            title: "Border Color",
            hidden(props) {
                if (props.tagState == "state2") {
                    return false;
                } else {
                    return true;
                }
            }
        },



        /// Down
        downfontColor: {
            type: ControlType.Color,
            title: "Font Color",
            hidden(props) {
                if (props.tagState == "state3") {
                    return false;
                } else {
                    return true;
                }
            }
        },

        downbgColor: {
            type: ControlType.Color,
            title: "Tags Color",
            hidden(props) {
                if (props.tagState == "state3") {
                    return false;
                } else {
                    return true;
                }
            }
        },

        downborderColor: {
            type: ControlType.Color,
            title: "Border Color",
            hidden(props) {
                if (props.tagState == "state3") {
                    return false;
                } else {
                    return true;
                }
            }
        },

        /// Disabled
        disablefontColor: {
            type: ControlType.Color,
            title: "Font Color",
            hidden(props) {
                if (props.tagState == "state4") {
                    return false;
                } else {
                    return true;
                }
            }
        },

        disablebgColor: {
            type: ControlType.Color,
            title: "Tags Color",
            hidden(props) {
                if (props.tagState == "state4") {
                    return false;
                } else {
                    return true;
                }
            }
        },

        disableborderColor: {
            type: ControlType.Color,
            title: "Border Color",
            hidden(props) {
                if (props.tagState == "state4") {
                    return false;
                } else {
                    return true;
                }
            }
        }

    }




    mouseDown(event) {
        if (this.props.tagState != "state4") {
            event.currentTarget.style.backgroundColor = this.props.downbgColor;
            event.currentTarget.style.color = this.props.downfontColor;
            event.currentTarget.style.borderColor = this.props.downborderColor;
        }
    }

    mouseUp(event) {
        if (this.props.tagState != "state4") {
            event.currentTarget.style.backgroundColor = this.props.downbgColor;
            event.currentTarget.style.color = this.props.downfontColor;
            event.currentTarget.style.borderColor = this.props.downborderColor;
        }
    }





    render() {
        var titleArray = this.props.tags.split(this.props.separator);
        var tagArray = [];
        var cursor_state = "pointer";
        var tagFontColor = this.props.fontColor;
        var tagBgColor = this.props.bgColor;
        var tagBorderColor = this.props.borderColor;

        for (var i = 0; i < titleArray.length; i++) {
            if (titleArray[i] == "") {
                titleArray[i] = "Tag";
            }

            if (this.props.tagState == "state4") {
                cursor_state = "default";
                tagBgColor = this.props.disablebgColor;
                tagFontColor = this.props.disablefontColor;
                tagBorderColor = this.props.disableborderColor;
            }




            if (this.props.paddingPerSide) {

                tagArray.push(
                    <button type="button" className="square" key={i} onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={(e) => this.mouseLeave(e)} onMouseDown={(e) => this.mouseDown(e)} onMouseUp={(e) => this.mouseUp(e)} style={{
                        borderStyle: "solid",
                        cursor: cursor_state,
                        borderWidth: this.props.borderSize,
                        borderColor: tagBorderColor,
                        borderRadius: this.props.borderRadius,
                        color: tagFontColor,
                        background: tagBgColor,
                        fontSize: this.props.fontSize,
                        margin: this.props.margin,
                        paddingLeft: this.props.paddingLeft,
                        paddingRight: this.props.paddingRight,
                        paddingTop: this.props.paddingTop,
                        paddingBottom: this.props.paddingBottom
                    }}>
                        {titleArray[i]}
                    </button>

                );
            }

            else {
                tagArray.push(
                    <button type="button" className="square" key={i} onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={(e) => this.mouseLeave(e)} onMouseDown={(e) => this.mouseDown(e)} onMouseUp={(e) => this.mouseUp(e)} style={{
                        borderStyle: "solid",
                        cursor: cursor_state,
                        borderWidth: this.props.borderSize,
                        borderColor: tagBorderColor,
                        borderRadius: this.props.borderRadius,
                        color: tagFontColor,
                        background: tagBgColor,
                        fontSize: this.props.fontSize,
                        margin: this.props.margin,
                        padding: this.props.padding
                    }}>
                        {titleArray[i]}
                    </button>
                );
            }

        }

        return <div style={{ textAlign: this.props.align }}>{tagArray}</div>;
    }
}
