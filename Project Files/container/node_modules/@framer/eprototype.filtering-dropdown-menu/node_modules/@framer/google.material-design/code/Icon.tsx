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
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
`

interface IconProps {
  icon: string
  color: string
  stretch: boolean
  height: number
}

export class Icon extends React.Component<IconProps> {
  static defaultProps = {
    icon: 'favorite',
    color: '#6200ee',
    stretch: false,
    width: 24,
    height: 24,
  }

  static propertyControls = {
    icon: { type: ControlType.String, title: 'Icon name' },
    color: { type: ControlType.Color, title: 'Color' },
    stretch: { type: ControlType.Boolean, title: 'Stretch' },
  }

  render() {
    return (
      <StyledIconFrame height={this.props.height} stretch={this.props.stretch}>
        <i
          className="material-icons mdc-button__icon"
          aria-hidden="true"
          style={{ color: this.props.color }}
        >
          {this.props.icon}
        </i>
      </StyledIconFrame>
    )
  }
}

interface iconProps {
  stretch: boolean
  height: number
}

const StyledIconFrame = styled<iconProps, any>('div')`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  i {
    font-size: ${props => (props.stretch ? props.height : 24)}px !important;
  }
`
