import React from 'react';

import Page from './components/Page/Page';

const App = () => {
  

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Page, { items: Page })
  // );

  return (
    <div>
      <Page />
    </div>
  );
}

export default App;
