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
import '@material/react-top-app-bar/dist/top-app-bar.css'
import '@material/react-material-icon/dist/material-icon.css'
import MDCTopAppBar from '@material/react-top-app-bar'
import MaterialIcon from '@material/react-material-icon'

interface Props {
  backgroundColor: string
  title: string
  type: string
  leftIcon: string
  rightIcon: string
}

export class TopAppBar extends React.Component<Props> {
  static defaultProps = {
    width: 360,
    height: 64,
    backgroundColor: '#6200ee',
    title: 'Hello World!',
    type: 'regular',
    leftIcon: 'menu',
    rightIcon: 'bookmark',
  }

  static propertyControls: PropertyControls = {
    backgroundColor: { type: ControlType.Color, title: 'Background Color' },
    title: { type: ControlType.String, title: 'Title' },
    type: {
      type: ControlType.Enum,
      title: 'Type',
      options: ['regular', 'short', 'shortCollapsed', 'prominent'],
      optionTitles: ['Regular', 'Short', 'Short Collapsed', 'Prominent'],
    },
    leftIcon: { type: ControlType.String, title: 'Left Icon' },
    rightIcon: { type: ControlType.String, title: 'Right Icon' },
  }

  render() {
    return (
      <MDCTopAppBar
        style={{ '--mdc-theme-primary': this.props.backgroundColor }}
        title={this.props.title}
        short={this.props.type == 'short'}
        shortCollapsed={this.props.type == 'shortCollapsed'}
        prominent={this.props.type == 'prominent'}
        navigationIcon={<MaterialIcon icon={this.props.leftIcon} />}
        actionItems={[<MaterialIcon key="item" icon={this.props.rightIcon} />]}
      />
    )
  }
}
