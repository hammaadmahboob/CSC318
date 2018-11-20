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
import { ControlType } from 'framer'
import '@material/button/dist/mdc.button.css'
import { MDCRipple } from '@material/ripple'

interface ButtonProps {
  type: string
  backgroundColor: string
  icon: string
  text: string
  disabled: boolean
  href: string
}

export class Button extends React.Component<ButtonProps> {
  private buttonRef: React.RefObject<HTMLButtonElement>

  static defaultProps = {
    height: 36,
    type: 'mdc-button--raised',
    width: 96,
    icon: '',
    text: 'Button',
    disabled: false,
    href: '',
    backgroundColor: '#3388ff',
  }

  static propertyControls = {
    type: {
      type: ControlType.Enum,
      options: [
        'mdc-button--raised',
        'mdc-button--unelevated',
        'mdc-button--outlined',
        'text',
      ],
      optionTitles: ['Raised', 'Unelevated', 'Outlined', 'Text'],
      title: 'Type',
    },
    text: { type: ControlType.String, title: 'Text' },
    icon: { type: ControlType.String, title: 'Icon' },
    backgroundColor: { type: ControlType.Color, title: 'Background' },
    disabled: { type: ControlType.Boolean, title: 'Disabled' },
  }

  constructor(props) {
    super(props)
    this.buttonRef = React.createRef()
  }

  componentDidMount() {
    const link = document.createElement('link')
    link.id = 'material-icons'
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons'
    document.head.appendChild(link)

    new MDCRipple(this.buttonRef.current)
  }

  render() {
    return (
      <button
        ref={this.buttonRef}
        style={{
          '--mdc-theme-primary': this.props.backgroundColor,
        }}
        className={'mdc-button ' + this.props.type}
        disabled={this.props.disabled}
      >
        {this.props.icon != '' && (
          <i className="material-icons mdc-button__icon" aria-hidden="true">
            {this.props.icon}
          </i>
        )}
        {this.props.text}
      </button>
    )
  }
}
