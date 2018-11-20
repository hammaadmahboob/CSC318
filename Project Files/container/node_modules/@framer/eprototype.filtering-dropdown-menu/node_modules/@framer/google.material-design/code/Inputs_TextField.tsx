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
import '@material/textfield/dist/mdc.textfield.css'
import { MDCTextField } from '@material/textfield'

interface Props {
  label?: string
  helpText: string
  variant: string
  disabled: boolean
}

export class Inputs_TextField extends React.Component<Props> {
  private textFieldRef: React.RefObject<HTMLDivElement>

  constructor(props) {
    super(props)
    this.textFieldRef = React.createRef()
    this.state = { value: 'Hello' }
  }
  static defaultProps = {
    width: 200,
    height: 56,
    label: 'Label',
    helpText: 'Help text',
    variant: '',
    disabled: false,
  }

  static propertyControls: PropertyControls = {
    label: { type: ControlType.String, title: 'Label' },
    helpText: { type: ControlType.String, title: 'Help Text' },
    variant: {
      type: ControlType.Enum,
      options: ['box', 'fullwidth', 'textarea', 'outlined'],
      optionTitles: ['Box', 'Full Width', 'Text Area', 'Outlined'],
      title: 'Variant',
    },
    disabled: { type: ControlType.Boolean, title: 'Disabled' },
  }

  componentDidMount() {
    new MDCTextField(this.textFieldRef.current)
  }

  render() {
    return (
      <TextFieldStyle
        className={`mdc-text-field mdc-text-field--${this.props.variant} ${
          this.props.disabled ? 'mdc-text-field--disabled' : ''
        }`}
        innerRef={this.textFieldRef}
      >
        <input
          type="text"
          id="my-text-field"
          className="mdc-text-field__input"
          style={{
            display: this.props.variant == 'textarea' ? 'none' : 'block',
          }}
        />

        {this.props.variant == 'textarea' && (
          <textarea
            id="textarea"
            class="mdc-text-field__input"
            rows="8"
            cols="40"
          />
        )}
        {this.props.variant == 'outlined' && (
          <React.Fragment>
            <div className="mdc-notched-outline">
              <svg>
                <path className="mdc-notched-outline__path" />
              </svg>
            </div>
            <div className="mdc-notched-outline__idle" />
          </React.Fragment>
        )}

        <label className="mdc-floating-label">{this.props.label}</label>
        <div className="mdc-line-ripple" />
      </TextFieldStyle>
    )
  }
}

const TextFieldStyle = styled.div`
  width: 100%;
`
