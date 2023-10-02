import Videodetail from './Component/Videodetail';
import { React, useState, useEffect, Suspense } from 'react'

function App() {

  return (
    <div>
      <Suspense fallback={<div>sdgdfgsfd...</div>}>
        <Videodetail />
      </Suspense>
    </div>
  );
}

export default App;
