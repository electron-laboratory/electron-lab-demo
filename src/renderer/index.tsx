import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from '@electron-lab/title-bar';
import './index.less';

const App = () => {
  return (
    <div style={{ color: 'white' }}>
      <TitleBar title="Electron Lab"></TitleBar>
      Hello Electron!
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById('root'));
