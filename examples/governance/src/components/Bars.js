import React, { Component } from 'react';
import { Chart, Bar } from 'react-chartjs-2';

function drawRoundedBars() {
  const ctx = this._chart.ctx; // eslint-disable-line
  const vm = this._view; // eslint-disable-line

  let left;
  let right;
  let top;
  let bottom;
  let signX;
  let signY;
  let borderSkipped;
  let borderWidth = vm.borderWidth;

  // If radius is less than 0 or is large enough to cause drawing errors a max
  // radius is imposed. If cornerRadius is not defined set it to 0.
  let cornerRadius = this._chart.config.options.cornerRadius; // eslint-disable-line
  if (cornerRadius < 0 || typeof cornerRadius === 'undefined') {
    cornerRadius = 0;
  }

  if (!vm.horizontal) {
    left = vm.x - (vm.width / 2);
    right = vm.x + (vm.width / 2);
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || 'bottom';
  } else {
    left = vm.base;
    right = vm.x;
    top = vm.y - (vm.height / 2);
    bottom = vm.y + (vm.height / 2);
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || 'left';
  }

  // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line
  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    const barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    const halfStroke = borderWidth / 2;

    // Adjust borderWidth when bar top position is near vm.base(zero).
    const borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
    const borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
    const borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
    const borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);

    // not become a vertical line?
    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    }
    // not become a horizontal line?
    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth;

  // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |
  const corners = [
    [left, bottom],
    [left, top],
    [right, top],
    [right, bottom],
  ];

  // Find first (starting) corner with fallback to 'bottom'
  const borders = ['bottom', 'left', 'top', 'right'];
  let startCorner = borders.indexOf(borderSkipped, 0);
  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  }

  // Draw rectangle from 'startCorner'
  const crner = cornerAt(0);
  ctx.moveTo(crner[0], crner[1]);

  for (let i = 1; i < 4; i += 1) {
    const width = corners[2][0] - corners[1][0];
    const height = corners[0][1] - corners[1][1];

    const x = corners[1][0];
    const y = corners[1][1];

    let radius = cornerRadius;

    // Fix radius being too large
    if (radius > Math.abs(height) / 2) {
      radius = Math.floor(Math.abs(height) / 2);
    }

    if (radius > Math.abs(width) / 2) {
      radius = Math.floor(Math.abs(width) / 2);
    }

    if (height < 0) {
      // Negative values in a standard bar chart
      const xTL = x;
      const xBL = xTL;
      const xTR = x + width;
      const xBR = xTR;
      const yBL = y;
      const yBR = yBL;
      const yTL = y + height;
      const yTR = yTL;

      // Draw
      ctx.moveTo(xBL, yBL);
      ctx.lineTo(xBR, yBR);
      // ctx.quadraticCurveTo(xBR, yBR, xBR, yBR - radius);
      ctx.lineTo(xTR, yTR + radius);
      ctx.quadraticCurveTo(xTR, yTR, xTR - radius, yTR);
      ctx.lineTo(xTL + radius, yTL);
      ctx.quadraticCurveTo(xTL, yTL, xTL, yTL + radius);
      ctx.lineTo(xBL, yBL);
      // ctx.quadraticCurveTo(xBL, yBL, xBL + radius, yBL);
    } else if (width < 0) {
      // Negative values in a horizontal bar chart
      const xTL = x + width;
      const xBL = xTL;
      const xTR = x;
      const xBR = xTR;
      const yBL = y + height;
      const yBR = yBL;
      const yTL = y;
      const yTR = yTL;

      // Draw
      ctx.moveTo(xBL, yBL);
      ctx.lineTo(xBR, yBR);
      // ctx.quadraticCurveTo(xBR, yBR, xBR, yBR - radius);
      ctx.lineTo(xTR, yTR + radius);
      ctx.quadraticCurveTo(xTR, yTR, xTR - radius, yTR);
      ctx.lineTo(xTL + radius, yTL);
      ctx.quadraticCurveTo(xTL, yTL, xTL, yTL + radius);
      ctx.lineTo(xBL, yBL);
      // ctx.quadraticCurveTo(xBL, yBL, xBL + radius, yBL);
    } else {
      // Positive Value
      ctx.moveTo(x + radius, y);
      ctx.lineTo((x + width) - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, (y + height));
      // ctx.quadraticCurveTo(x + width, y + height, (x + width) - radius, y + height);
      ctx.lineTo(x, y + height);
      // ctx.quadraticCurveTo(x, y + height, x, (y + height) - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
    }
  }

  ctx.fill();

  if (borderWidth) {
    ctx.stroke();
  }
}

Chart.elements.Rectangle.prototype.draw = drawRoundedBars;

const CHART_COLORS = ['#F25F5C', '#593C8F', '#449DD1'];

const CHART_OPTIONS = {
  cornerRadius: 12,
  maintainAspectRatio: false,
  cutoutPercentage: 80,
  tooltips: {
    enabled: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.8,
      categoryPercentage: 1,
    }],
    yAxes: [{
      display: false,
    }],
  },
}

class BarChart extends Component {
  render() {
    return (
      <section className="governance-chart">
        <div style={{
          width: 300,
          height: 300
        }}>
          <Bar data={{
                      labels: this.props.labels,
                      datasets: [{
                        data: this.props.data,
                        backgroundColor: CHART_COLORS,
                        hoverBackgroundColor: CHART_COLORS
                      }]
                    }}
                    legend={{
                      display: false
                    }}
                    options={ CHART_OPTIONS } />
        </div>
        <ul className="governance-legend">
          {
           this.props.data.map((answer, index) =>
              <li style={{ color: CHART_COLORS[index] }}>
                <span className="governance-legend-badge" style={{ backgroundColor: CHART_COLORS[index] }}></span>
                {answer} {this.props.custom} ({this.props.labels[index]})
              </li>
            )
          }
        </ul>
      </section>
    );
  }
}

export default BarChart;