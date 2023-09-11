import React, { useEffect, useState } from 'react';

import LoadingScreen from './src/components/LoadingScreen';

import RootNavigation from './src/index';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen title='Carregando...' size={50} color={'#000'} /> : <RootNavigation />}
    </>
  );
};

export default App;