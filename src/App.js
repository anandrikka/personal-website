import React from 'react';

import AppContainer from './components/AppContainer';
import PreLoader from './components/PreLoader';
import data from './metadata';

export const ProfileContext = React.createContext(data)

function App() {  
  return (
    <ProfileContext.Provider value={data}>
      <PreLoader />
      <AppContainer />
    </ProfileContext.Provider>
  );
}

export default App;
