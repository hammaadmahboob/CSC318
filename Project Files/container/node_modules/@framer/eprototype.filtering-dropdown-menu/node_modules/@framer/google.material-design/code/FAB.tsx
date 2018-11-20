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
import { MDCRipple } from '@material/ripple'

import '@material/fab/dist/mdc.fab.css'
import { ControlType } from 'framer'

interface FABProps {
  backgroundColor: string
  icon: string
  iconColor: string
  title: string
  type: string
}

export class FAB extends React.Component<FABProps> {
  private buttonRef: React.RefObject<HTMLButtonElement>

  static defaultProps = {
    backgroundColor: '#3388ff',
    icon: 'add',
    iconColor: 'white',
    title: 'Create',
    width: 56,
    height: 56,
    type: 'mdc-fab',
  }

  static propertyControls = {
    type: {
      type: ControlType.Enum,
      options: ['mdc-fab', 'mdc-fab--extended', 'mdc-fab--mini'],
      optionTitles: ['Regular', 'Extended', 'Mini'],
      title: 'Type',
    },

    backgroundColor: { type: ControlType.Color, title: 'Background' },
    icon: { type: ControlType.String, title: 'Icon' },
    iconColor: { type: ControlType.Color, title: 'Icon color' },
    title: { type: ControlType.String, title: 'Title' },
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
        className={`mdc-fab ${this.props.type}`}
        style={{
          '--mdc-theme-secondary': this.props.backgroundColor,
          color: this.props.iconColor,
        }}
      >
        <span className="mdc-fab__icon material-icons">{this.props.icon}</span>
        {this.props.type == 'mdc-fab--extended' && (
          <span className="mdc-fab__label">{this.props.title}</span>
        )}
      </button>
    )
  }
}
