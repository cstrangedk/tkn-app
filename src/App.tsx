import * as React from 'react';
import PageLayout from './layouts/PageLayout/PageLayout';
import EarnToken from './modules/EarnToken/EarnToken';

class App extends React.Component {
  public render() {
    return (
      <div>
        <PageLayout>
          <EarnToken />
        </PageLayout>

      </div>
    );
  }
}

export default App;
