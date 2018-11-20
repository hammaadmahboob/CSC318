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
import { PropertyControls, ControlType } from 'framer'
import '@material/checkbox/dist/mdc.checkbox.css'
import '@material/form-field/dist/mdc.form-field.css'
import { MDCFormField } from '@material/form-field'
import { MDCCheckbox } from '@material/checkbox'

interface Props {
  label: string
  disabled: boolean
}

export class Inputs_Checkbox extends React.Component<Props> {
  private checkboxRef: React.RefObject<HTMLDivElement>
  private formFieldRef: React.RefObject<HTMLDivElement>

  static defaultProps = {
    label: 'Check me',
    disabled: false,
    width: 160,
    height: 40,
  }

  static propertyControls: PropertyControls = {
    label: { type: ControlType.String, title: 'Label' },
    disabled: { type: ControlType.Boolean, title: 'Disbled' },
  }

  constructor(props) {
    super(props)
    this.checkboxRef = React.createRef()
    this.formFieldRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.formFieldRef.current)

    new MDCCheckbox(this.checkboxRef.current)
    // new MDCFormField(this.formFieldRef.current)
  }

  render() {
    return (
      <div
        className={`mdc-form-field ${this.props.disabled &&
          'mdc-checkbox--disabled'}`}
        ref={this.formFieldRef}
      >
        <div className="mdc-checkbox" ref={this.checkboxRef}>
          <input
            type="checkbox"
            className="mdc-checkbox__native-control"
            id="checkbox-1"
          />
          <div className="mdc-checkbox__background">
            <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
              <path
                className="mdc-checkbox__checkmark-path"
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"
              />
            </svg>
            <div className="mdc-checkbox__mixedmark" />
          </div>
        </div>
        {this.props.label != '' && <label>{this.props.label}</label>}
      </div>
    )
  }
}
