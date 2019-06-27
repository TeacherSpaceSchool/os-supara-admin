import React, { lazy, Suspense } from 'react';

const Table = lazy(() => import('../component/Table'));

const Main = React.memo(
    (props) =>{
         return (
                      <Suspense fallback={null}>
                        <Table history={props.history}/>
                      </Suspense>
        );
  })

export default Main;
