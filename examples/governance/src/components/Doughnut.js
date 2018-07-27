import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const CHART_COLORS = ['#F25F5C', '#593C8F', '#449DD1'];

const CHART_OPTIONS = {
  maintainAspectRatio: false,
  cutoutPercentage: 80,
  tooltips: {
    enabled: false
  }
}

class DoughnutChart extends Component {
  render() {
    return (
      <section className="governance-chart">
        <div style={{
          width: 300,
          height: 300
        }}>
          <Doughnut data={{
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

export default DoughnutChart;