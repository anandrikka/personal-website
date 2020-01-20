import React from 'react';

import Block from './Block';
import Left from './left/Left';
import Right from './right/Right';

function AppContainer() {
  return (
    <div className="columns-block">
      <Block classes="left-col-block">
        <Left />
      </Block>
      <Block classes="right-col-block">
        <Right />
      </Block>
    </div>
  )
}

export default AppContainer;
