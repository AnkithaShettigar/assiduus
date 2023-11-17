import React, { useEffect, useRef, useState } from 'react';
import { Typography, Modal, Button } from '@mui/material';
import './Invoice.css';
import * as d3 from 'd3';

const Invoice = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data] = useState([5, 7, 3, 5, 7, 5]);
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

    const xValues = [
      'Older',
      'Jan 01-08',
      'Jan 09-16',
      'Jan 17-24',
      'Jan 25-31',
      'Future',
    ];

    const xScale = d3.scaleBand().domain(xValues).range([0, w]).padding(0.8);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([h, 0]);

    const xAxis = d3.axisBottom(xScale);

    svg.append('g').call(xAxis).attr('transform', `translate(0,${h})`);

    // Hide the y-axis
    svg.select('.domain').remove();
    svg.selectAll('.tick line').remove();

    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('x', (v, i) => xScale(xValues[i]))
      .attr('y', yScale)
      .attr('width', xScale.bandwidth())
      .attr('height', (val) => h - yScale(val))
      .attr('stroke', 'green')
      .attr('fill', 'green');
  }, [data]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFileUpload = (event) => {
    // Handle file upload logic here
    console.log('File uploaded:', event.target.files[0]);
    handleCloseModal();
  };

  return (
    <div>
      <Typography className="card">
        <Typography className="card-top">
          <Typography className="card-invoice">
            <Typography>
              <p className="card-title">Invoices owed to you</p>
            </Typography>
            <Typography>
              <button className="invoice-btn" onClick={handleOpenModal}>
                New Sales Invoice
              </button>
            </Typography>
          </Typography>
        </Typography>
        <svg ref={svgRef} className="svg-file"></svg>
      </Typography>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="file-upload-modal"
        aria-describedby="file-upload-description"
      >
        <div className="modal-paper">
          <Typography variant="h6" id="file-upload-modal">
            Upload Sales Invoice
          </Typography>
          <Button onClick={handleCloseModal} className="btn-close">
            X
          </Button>
          <input
            type="file"
            onChange={handleFileUpload}
            className="file-choose"
          />
          <Button
            variant="contained"
            onClick={handleFileUpload}
            className="btn-upload"
          >
            Upload
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Invoice;
