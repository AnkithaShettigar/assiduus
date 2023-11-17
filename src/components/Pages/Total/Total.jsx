import { Typography } from '@mui/material';
import './Total.css';
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const Total = () => {
  const [data] = useState([
    { category: 'August', pv: 5, uv: 3 },
    { category: 'September', pv: 7, uv: 5 },
    { category: 'October', pv: 3, uv: 2 },
    { category: 'November', pv: 5, uv: 3 },
    { category: 'December', pv: 7, uv: 5 },
    { category: 'January', pv: 5, uv: 3 },
  ]);

  const svgRef = useRef();

  useEffect(() => {
    const w = 450;
    const h = 150;
    const svg = d3
      .select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visible')
      .style('margin-left', '25px')
      .style('margin-top', '15px');

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.category))
      .range([0, w])
      .padding(0.8);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Math.max(d.pv, d.uv))])
      .range([h, 0]);

    const xAxis = d3.axisBottom(xScale);
    svg.append('g').call(xAxis).attr('transform', `translate(0,${h})`);

    // Hide the y-axis
    svg.select('.domain').remove();
    svg.selectAll('.tick line').remove();

    // Render 'pv' bars
    svg
      .selectAll('.pv-bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'pv-bar')
      .attr('x', (d) => xScale(d.category))
      .attr('width', xScale.bandwidth())
      .attr('fill', '#3DE397')
      .attr('y', (d) => yScale(d.pv))
      .attr('height', (d) => h - yScale(d.pv));

    // Render 'uv' bars starting from the top of 'pv' bars
    svg
      .selectAll('.uv-bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'uv-bar')
      .attr('x', (d) => xScale(d.category))
      .attr('width', xScale.bandwidth())
      .attr('fill', 'green')
      .attr('y', (d) => yScale(d.uv))
      .attr('height', (d) => h - yScale(d.uv));
  }, [data]);

  return (
    <Typography className="card">
      <Typography className="card-top">
        <Typography>
          <p className="card-title">Total cash flow</p>
        </Typography>

        <Typography className="InOut">
          <Typography className="input box1"></Typography>
          <Typography className="output box1"></Typography>
        </Typography>
      </Typography>
      <svg ref={svgRef}></svg>
    </Typography>
  );
};

export default Total;
