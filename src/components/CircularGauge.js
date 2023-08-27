import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function CircularGauge({ value, text }) {
  const gaugeContainerRef = useRef(null);

  useEffect(() => {
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;
    const ringWidth = 10;

    const svg = d3.select(gaugeContainerRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Calculate the ring angle based on the percentage value
    const ringAngle = (value / 100) * 360;

    // Create the black circle background
    svg.append('circle')
      .attr('r', radius)
      .attr('fill', 'black');

    // Calculate adjusted inner and outer radii
    const innerRadius = radius - ringWidth; // Move the inner edge inward

    // Create the blue ring representing the percentage with adjusted radii
    svg.append('path')
      .datum({ startAngle: 0, endAngle: (ringAngle * Math.PI) / 180 })
      .attr('d', d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius) // Keep the outer edge at the original radius
        .startAngle(d => d.startAngle)
        .endAngle(d => d.endAngle)
      )
      .attr('fill', 'aqua');

    // Add custom text in the middle
    svg.append('text')
      .text(text)
      .attr('dy', '0.3em') // Adjust vertical alignment
      .attr('text-anchor', 'middle') // Center the text horizontally
      .attr('fill', 'white')
      .style('font-size', '24px'); // Adjust font size as needed
  }, [value, text]);

  return (
    <div ref={gaugeContainerRef} className="circular-gauge-container"></div>
  );
}

export default CircularGauge;
