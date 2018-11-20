import * as React from "react";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

/*
    Based on component found here: https://stackblitz.com/edit/react-mvqwr7 by Jose Marmolejos.
    Rewritten to a usable Framer X component by Emilie Ørtoft (twitter: @emipocalypse).
    Any feedback/comments are welcome.

    To add a 3rd dropdown menu just add the comments found throughout this code.
    To add more, just copy the 3rd options from the comments and change everything accordingly.

    Enjoy!
*/

const style: React.CSSProperties = {
    height: 400,
    width: 250,
    display: "inline",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    fontSize: 25,
    color: "#000000",
    padding: 10,
    overflow: "hidden"
};

export class filteringDropdownMenu extends React.Component<{}, any> {

    constructor(props) {
        super(props);
        this.state = {
            name: 'React',
            selectedOption: {},
            selectedOption2: {}
            //, selectedOption3: {}
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        //this.handleChange3 = this.handleChange3.bind(this);
    }

    handleChange1(selectedOption) {
        this.setState({selectedOption});
    }

    handleChange2(selectedOption) {
        this.setState({selectedOption2: selectedOption});
    }

    /*
    handleChange3(selectedOption) {
        this.setState({selectedOption3: selectedOption});
    }
    */

    render() {
        const options1 = [
            {value: 'one', label: 'One'},
            {value: 'two', label: 'Two'}
        ];

        const options2 = [
            {value: 'one-a', label: 'One A', link: 'one'},
            {value: 'one-b', label: 'One B', link: 'one'},
            {value: 'two-a', label: 'Two A', link: 'two'},
            {value: 'two-b', label: 'Two B', link: 'two'}
        ];

        /*
        const options3 = [
            {value: 'one-a-1', label: 'One A 1', link: 'one-a'},
            {value: 'one-a-2', label: 'One A 1', link: 'one-a'},
            {value: 'one-b-1', label: 'One B 1', link: 'one-b'},
            {value: 'one-b-2', label: 'One B 2', link: 'one-b'},
            {value: 'two-a-1', label: 'Two A 1', link: 'two-a'},
            {value: 'two-a-2', label: 'Two A 2', link: 'two-a'},
            {value: 'two-b-1', label: 'Two B 1', link: 'two-b'},
            {value: 'two-b-2', label: 'Two B 2', link: 'two-b'}
        ];
        */

        const filteredOptions = options2.filter((o) => o.link === this.state.selectedOption.value);

        //const filteredOptions2 = options3.filter((o) => o.link === this.state.selectedOption2.value);

        return (
            <div style={style}>
                <div>
                    <label>Select one</label>
                    <Select
                        name="form-field-name"
                        value={this.state.selectedOption.value}
                        onChange={this.handleChange1}
                        options={options1}
                    />
                </div>
                <div>
                    <label>Then the other</label>
                    <Select
                        name="form-field-name"
                        value={this.state.selectedOption2.value}
                        onChange={this.handleChange2}
                        options={filteredOptions}
                    />
                </div>
                {/*
                <div>
                    <label>Then the third</label>
                    <Select
                        name="form-field-name"
                        value={this.state.selectedOption3.value}
                        onChange={this.handleChange3}
                        options={filteredOptions2}
                    />
                </div>
                */}
            </div>
        )
    }
}