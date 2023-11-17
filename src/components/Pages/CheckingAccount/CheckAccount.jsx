import { Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './CheckAccount.css';

const CheckAccount = () => {
  const [data] = useState([
    20, 30, 25, 35, 20, 35, 25, 15, 20, 10, 20, 25, 30, 20, 15, 25,
  ]);

  const [selectedManage, setSelectedManage] = useState('');

  const svgRef = useRef();

  useEffect(() => {
    const w = 500;
    const h = 150;
    const svg = d3
      .select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visible')
      .style('margin-left', '5px')
      .style('margin-top', '15px');

    const generateXValues = () => {
      if (selectedManage === '01-08') {
        return ['01', '02', '03', '04', '05', '06', '07', '08'];
      } else if (selectedManage === '09-18') {
        return ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
      } else if (selectedManage === '19-31') {
        return [
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
          '31',
        ];
      }
      // Default case (if no range is selected)
      return [];
    };

    const xValues = generateXValues();

    const xScale = d3.scaleBand().domain(xValues).range([0, w]).padding(0.8);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([h, 0]);

    const xAxis = d3.axisBottom(xScale);

    // Select and update the x-axis with transition
    svg.select('.x-axis').remove();

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${h})`)
      .call(xAxis.tickValues(xScale.domain().filter((_, i) => i % 2 === 0)));

    // Create a line generator
    const line = d3
      .line()
      .x((d, i) => xScale(xValues[i]) + xScale.bandwidth() / 2) // Center of each bar
      .y((d) => yScale(d))
      .curve(d3.curveCardinal);

    // Select and update the line path with transition
    const path = svg.select('.line');
    if (path.empty()) {
      // If path doesn't exist, create it
      svg
        .append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', 'green') // Set the color of the line
        .attr('stroke-width', 2) // Set the width of the line
        .attr('d', line);
    } else {
      // If path exists, update it with transition
      path.transition().duration(500).attr('d', line(data));
    }

    // Hide the y-axis
    svg.select('.domain').remove();
    svg.selectAll('.tick line').remove();
  }, [data, selectedManage]);

  const handleManageSelectChange = (event) => {
    const value = event.target.value;
    setSelectedManage(value);
  };

  return (
    <Typography className="card">
      <Typography className="card-top">
        <Typography className="card-content">
          <Typography>
            {' '}
            <p className="card-title">Checking Account</p>
          </Typography>
          <Typography className="card-option">
            <select
              name="Manage"
              id="first-select"
              onChange={handleManageSelectChange}
            >
              <option value="01-08">Manage</option>
              <option value="01-08">01-08</option>
              <option value="09-18">09-18</option>
              <option value="19-31">19-31</option>
            </select>
            <select name="January" id="second-select">
              <option value="">January</option>
              <option value="">Febrauary</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
          </Typography>
        </Typography>
      </Typography>

      <svg ref={svgRef} className="svg-file"></svg>
    </Typography>
  );
};

export default CheckAccount;
