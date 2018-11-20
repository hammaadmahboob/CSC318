// The MIT License
//
// Copyright (c) 2018 Google, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import * as React from 'react'
import styled from 'styled-components'
import { PropertyControls, ControlType, Frame } from 'framer'
import '@material/select/dist/mdc.select.css'
import { MDCSelect } from '@material/select'

interface Props {
  text: string
}

interface State {
  selectedOption: string
}

export class Inputs_Select extends React.Component<Props, State> {
  private selectRef: React.RefObject<HTMLSelectElement>

  constructor(props) {
    super(props)
    this.selectRef = React.createRef()
    this.handleChange = this.handleChange.bind(this)
    this.state = { selectedOption: '' }
  }

  static defaultProps = {
    text: 'Hello World!',
    width: 200,
    height: 48,
  }

  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: 'Text' },
  }

  handleChange(event) {
    this.setState({ selectedOption: event.target.value })
  }

  componentDidMount() {
    new MDCSelect(this.selectRef.current)
  }

  render() {
    return (
      <SelectStyle className="mdc-select" innerRef={this.selectRef}>
        <select
          onChange={this.handleChange}
          className="mdc-select__native-control"
          value={this.state.selectedOption}
        >
          <option value="" disabled />
          <option value="grains">Bread, Cereal, Rice, and Pasta</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruit">Fruit</option>
        </select>
        <label className={'mdc-floating-label'}>Pick a Food Group</label>
        <div className="mdc-line-ripple" />
      </SelectStyle>
    )
  }
}

const SelectStyle = styled.div`
  width: 100%;
`
