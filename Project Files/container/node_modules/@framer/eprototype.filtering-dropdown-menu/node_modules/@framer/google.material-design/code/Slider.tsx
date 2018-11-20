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

import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { MDCSlider } from "@material/slider";
import "@material/slider/dist/mdc.slider.css";

interface Props {
  min: string;
  max: string;
  discrete: boolean;
  color: string;
}

export class Slider extends React.Component<Props> {
  private sliderRef: React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }
  static defaultProps = {
    width: 200,
    height: 48,
    min: 0,
    max: 100,
    discrete: false,
    color: "#018786",
  };

  static propertyControls: PropertyControls = {
    min: { type: ControlType.String, title: "Min" },
    max: { type: ControlType.String, title: "Max" },
    color: { type: ControlType.Color, title: "Color" },
    discrete: { type: ControlType.Boolean, title: "Discrete" },
  };

  componentDidMount() {
    new MDCSlider(this.sliderRef.current);
  }

  render() {
    return (
      <div
        className="mdc-slider"
        ref={this.sliderRef}
        role="slider"
        aria-valuemin={this.props.min}
        aria-valuemax={this.props.max}
        aria-valuenow={parseInt(this.props.max) / 2}
        style={{ width: "100%", "--mdc-theme-secondary": this.props.color }}
      >
        <div className="mdc-slider__track-container">
          <div className="mdc-slider__track" />
        </div>
        <div className="mdc-slider__thumb-container">
          {this.props.discrete && (
            <div className="mdc-slider__pin">
              <span className="mdc-slider__pin-value-marker" />
            </div>
          )}
          <svg className="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875" />
          </svg>
          <div className="mdc-slider__focus-ring" />
        </div>
      </div>
    );
  }
}
