import React from 'react';
import RHeader from './RHeader';
import RContainer from './RContainer';
import { myersBriggsTypes as MBTypes } from './constants';
import RSuggestions from './RSuggestions';

const Results = ({ results }) => {

  const acronym = results && results['type'];
  const pseudonym = acronym && MBTypes.find(t => t.acronym === acronym)['pseudonym'];
  const dimensions = results && results['dimensions'];
  const suggestions = results && results['alternatives'];

  return (
    <div className='page'>
      {/* <RHeader acronym={acronym} pseudonym={pseudonym} /> */}
      <RContainer dimensions={dimensions} suggestions={suggestions} />
      <RSuggestions suggestions={suggestions} />
    </div>
  );
};

export default Results;
