import React from 'react';
import PinballForm from './PinballForm.js';
import ResultsDisplay from './ResultsDisplay';

class Main extends React.Component {

  render() {
    return (
      <>
      <h1>Pinball Date</h1>
        <PinballForm />
        <ResultsDisplay />
      </>
    );
  }
}

export default Main;