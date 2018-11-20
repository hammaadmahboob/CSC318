import * as React from "react";
import { PropertyControls, ControlType } from "framer";

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
    color: string;

}

export class EventCard extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
    text: "Hello World!"
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    }

    render() {
    return <div style={style}>{this.props.text}</div>;
    }
}

import * as React from "react";
import { PropertyControls, ControlType, FramerAppleThunderboltDisplay } from "framer";
require('./css/style.css');

const input: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "row",
    textAlign: "center",
    overflow: "hidden",
    borderRadius: 6,
    transition: 'all .5s',
    backgroundColor: '#fff',
    flexWrap:'wrap',
    transition:'all .5s',
};

const container: React.CSSProperties = {

};

const dropDownContainer: React.CSSProperties = {
    background:'#fff'
    borderRadius: 6,
    transition:'all .5s',
   
};


// Define type of property

export class multi_select extends React.Component<Props> {

    // Set default properties


    state = {
        width: this.props.width,
        // padding:this.props.padding,
        listDatas: this.props.listDatas.split(","),
        tagDatas: [],
        toggleDropDown:false,
    };
    componentWillReceiveProps(nextProps) {
        this.setState({
            width: nextProps.width,
            // listDatas: this.nextProps.listDatas.split(","),
        })
    }

    static propertyControls: PropertyControls = {
        paddingSize: { type: ControlType.Number, title: "padding" },
        color: { type: ControlType.Color, title: "color" },
        fontColor: { type: ControlType.Color, title: "fontcolor" },
        listDatas:{ type: ControlType.String, title: "selectData" },
    };
    static defaultProps = {
        width: 300,
        color: '#D9BFEF',
        paddingSize: 20,
        fontColor:"#333",
        listDatas:"Sketch,Photoshop,FramerX,React"
    };

     // 逻辑交互
    handleListClick(key) {
        // console.log(this);
        let tagDatasNow = this.state.tagDatas
        tagDatasNow.push(this.state.listDatas[key])
        // console.log(tagDatasNow)
        let arrData = this.state.listDatas
        delete arrData[key] //！！！不能用splice 因为splice会造成key与新的state数组的值不匹配
        // console.log(arrData);
        
        
        this.setState({
            listDatas: arrData,
            tagDatas:tagDatasNow

        })
    }
    handleTagClick(e,key){
        e.stopPropagation();//事件冒泡 防止与input框事件冲突
        // console.log(key)
        let arrData = this.state.listDatas;
       
        arrData.unshift(this.state.tagDatas[key]);
        let tagDatasNow = this.state.tagDatas;
        delete tagDatasNow[key]
        // console.log(this.state.tagDatas)
        this.setState({
            listDatas: arrData,
            tagDatas:tagDatasNow,
            toggleDropDown:true,
   
        })
    }
    handleInputContainerClick(){
       this.setState({
        toggleDropDown:!this.state.toggleDropDown,
       })
    }
     // 逻辑交互 end
    render() {
        console.log("111"+this.state.listDatas)
        // listDatas = this.props.listDatas;
        const shadowStyle = "0px 5px 10px "+this.props.color
        const bordeRender = '1px solid ' + this.props.color;
        const toggleIcon =  '8px solid ' + this.props.color;
        let inputContainer = {
            ...input,
             boxShadow:shadowStyle,
            
            width: this.state.width,
            border: bordeRender,
            color: this.props.color,
            paddingTop: this.props.paddingSize / 4,
            paddingBottom: 0,
            paddingLeft: this.props.paddingSize / 4,
            paddingRight: this.props.paddingSize / 4,
        }
        let dropDownDisplay = true; //判断数组中是否否为undefined，如果是则dropdown的容器隐藏
        if(this.state.toggleDropDown != false){

            for (const key in this.state.listDatas ) {
                if (this.state.listDatas[key] != 'undefined') {
                    dropDownDisplay = false
                }
              
            }
        }else{
            dropDownDisplay = true
        }
        

      
        let dropDownDisplayStyle =dropDownDisplay?'none':'block'
        let inputText = "block";
        for (const key in this.state.tagDatas ) {
            if (this.state.tagDatas[key] != 'undefined') {
                inputText = "none";
            }
          
        }
        // console.log(dropDownDisplay);
        

        return <div style={...container}>

            <div style={inputContainer} 
              onClick ={this.handleInputContainerClick.bind(this)}>
                    <span style={{
                       marginLeft:this.props.paddingSize / 4 * 3,
                        display:inputText,
                        overflow:'hidden',
                        padding:this.props.paddingSize / 4,borderRadius:4,
                        marginRight:this.props.paddingSize / 4,
                        marginBottom:this.props.paddingSize / 4,
                        color:'#eaeaea',
                    }}>
                    click to choose
                    </span>
                {this.state.tagDatas.map((tagData, index) => {
                    return (<span 
                        key={index}
                        className={'appear'}
                        style={{
                        overflow:'hidden',
                        color:this.props.fontColor,
                        border:bordeRender,padding:this.props.paddingSize / 4,borderRadius:4,
                        marginRight:this.props.paddingSize / 4,
                        marginBottom:this.props.paddingSize / 4,
                    }}>
                        {tagData}
                        <span onClick={(e) => this.handleTagClick(e,index)}
                        style={{padding:this.props.paddingSize / 4,
                        fontWeight:"bold",}}>×</span>
                    </span>);
                })}
                <span style={{position:'absolute',right:this.props.paddingSize / 2,transition:'all .5s',
                 borderLeft: '5px solid transparent',
                 borderRight: '5px solid transparent'
                 borderTop:toggleIcon,
                marginTop:-2,}}
                 className={this.state.toggleDropDown?"toggleOpen":"toggleClose"}>
                </span>
            </div>
           
             <div style={{ ...dropDownContainer,boxShadow:shadowStyle, display:dropDownDisplayStyle, width: this.state.width, marginTop: this.props.paddingSize / 4, border: bordeRender, paddingLeft: this.props.paddingSize, paddingRight: this.props.paddingSize }}>
                {this.state.listDatas.map((listdata, index) => {
                    return <div onClick={() => { this.handleListClick(index) }}
                          key={index}
                        style={{ paddingTop: this.props.paddingSize / 3 * 2, 
                            paddingBottom: this.props.paddingSize / 3 * 2 ,
                            color:this.props.fontColor,
                        }}
                    >{listdata}</div>
                })}

            </div>
 
        </div>
            ;
    }

    //下面为style的交互 与逻辑无关



}
