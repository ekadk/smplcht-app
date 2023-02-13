import React from 'react';
import { RouterProvider } from 'react-router';
import router from './routes';

const App = () => {
  return (
    <div className='bg-base-300 min-h-screen w-full'>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
