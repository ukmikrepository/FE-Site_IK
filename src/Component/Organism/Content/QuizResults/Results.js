import React from 'react';
import RHeader from './RHeader';
import { Button } from 'reactstrap';
import { views } from '../../App';
import RContainer from './RContainer';
import { myersBriggsTypes as MBTypes } from '../../../constants';
import RSuggestions from './RSuggestions';

const Results = ({ results, setView }) => {
  const goBack = () => {
    setView(views.questions);
  };

  const acronym = results && results['type'];
  const pseudonym = acronym && MBTypes.find(t => t.acronym === acronym)['pseudonym'];
  const dimensions = results && results['dimensions'];
  const suggestions = results && results['alternatives'];

  return (
    <div className='page w-100 vh-100'>
      <RHeader acronym={acronym} pseudonym={pseudonym} />
      <RContainer dimensions={dimensions} suggestions={suggestions} />
      <RSuggestions suggestions={suggestions} />
      <div>
        <Button id='goBackButton' name='goBackButton'
          outline color='danger' className='my-5 px-5'
          onClick={goBack}>Retake Test
        </Button>
      </div>
    </div>
  );
};

export default Results;
