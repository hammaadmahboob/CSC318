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
import { PropertyControls, ControlType } from 'framer'
import '@material/switch/dist/mdc.switch.css'
import { MDCSwitch } from '@material/switch/dist/mdc.switch'

interface Props {
  text: string
}

export class Inputs_Switch extends React.Component<Props> {
  private switchRef: React.RefObject<HTMLDivElement>

  constructor(props) {
    super(props)
    this.switchRef = React.createRef()
  }

  static defaultProps = {
    text: 'Label',
    width: 100,
    height: 20,
  }

  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: 'Label' },
  }

  componentDidMount() {
    new MDCSwitch(this.switchRef.current)
  }

  render() {
    return (
      <React.Fragment>
        <SelectStyle className="mdc-switch" innerRef={this.switchRef}>
          <div className="mdc-switch__track" />
          <div className="mdc-switch__thumb-underlay">
            <div className="mdc-switch__thumb">
              <input
                type="checkbox"
                id="basic-switch"
                className="mdc-switch__native-control"
                role="switch"
              />
            </div>
          </div>
        </SelectStyle>
        {this.props.text != '' && (
          <label style={{ marginLeft: 10 }}>{this.props.text}</label>
        )}
      </React.Fragment>
    )
  }
}

const SelectStyle = styled.div``
