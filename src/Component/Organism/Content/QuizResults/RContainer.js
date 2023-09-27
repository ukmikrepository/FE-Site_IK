import React from 'react';
import RChart from './RChart';

const dimensionsLeft = [`Extroversion`, 'Sensing', 'Thinking', 'Judging'];
const dimensionsRight = ['Introversion', 'iNtuition', 'Feeling', 'Perceiving'];

const createLabelHTML = (label) => {
  let key = label;
  label = label.replace(/[A-Z]/, (l) => `<b class="text-accent">${l}</b>`);
  return (
    <span
      key={key}
      className='r-chart-label'
      dangerouslySetInnerHTML={{ __html: label }}
    />
  );
};

const RContainer = (props) => {
  const labelsLeft = dimensionsLeft.map((d) => createLabelHTML(d));
  const labelsRight = dimensionsRight.map((d) => createLabelHTML(d));

  return (
    <div>
      <div className='r-chart-container'>
        <div className='r-chart-label-group align-items-end'>
          {labelsLeft}
        </div>
        <div>
          <div>
            <RChart data={props.dimensions} />
          </div>
        </div>
        <div className='r-chart-label-group align-items-start'>
          {labelsRight}
        </div>
      </div>
    </div>
  );
};

export default RContainer;
