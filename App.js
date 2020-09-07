import React, { Component } from 'react';

class App extends Component {
  render() {
    const tips = [
      'Keep components small and function-specific',
      'Reusability is important, so keep creation of new components to the minimum required',
      'Consolidate duplicate code – DRY your code',
      'Put CSS in JavaScript',
      'Comment only where necessary',
      'Name the component after the function',
      'Use capitals for component names',
      'Mind the other naming conventions',
      'Separate stateful aspects from rendering',
      'Code should execute as expected and be testable',
      'All files related to any one component should be in a single folder',
      'Use tools like Bit',
      'Use snippet libraries',
      'Write tests for all code', 
      'Follow linting rules, break up lines that are too long', 
    ];
    
    const groupTips = tips.map((elem, index) => {
        return <li key={index} className="item">{elem}</li>
    });
    
    return (
        <div className="App">
          <div className="title">React Best Practice </div>
          <ul className="groupTips">{groupTips}</ul>
        </div>
    );
  }
}



export default App;
