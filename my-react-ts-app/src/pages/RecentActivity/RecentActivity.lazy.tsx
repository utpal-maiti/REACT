import React, { lazy, Suspense } from 'react';

const LazyRecentActivity = lazy(() => import('./RecentActivity'));

const RecentActivity = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRecentActivity {...props} />
  </Suspense>
);

export default RecentActivity;
