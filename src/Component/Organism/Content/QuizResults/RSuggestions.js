import React from 'react';

export default class RSuggestions extends React.Component {
  render() {
    const { suggestions } = this.props;
    return (
        <div> {
          suggestions
            &&  <p className='mt-3'>Kamu juga bisa mempertimbangkan tipe berikut ini :
                <b> { suggestions.join(', ') }</b></p>
        } </div>
    );
  };
}