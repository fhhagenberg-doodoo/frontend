import React from 'react';
import '../assets/styles/flex-gap.css';
import { DooDooErrorBoundary } from './DooDooErrorBoundary';
import { DooDooInput } from './DooDooInput';
import { DooDooLoadingIndicator } from './DooDooLoadingIndicator';
import { DooDooTaskGroupList } from './DooDooTaskGroupList';

export const DooDooBody: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow flex-gap-5 lg:flex-gap-15 items-center pt-4 min-h-0 w-full lg:w-1/2">
      <DooDooErrorBoundary>
        <React.Suspense fallback={<DooDooLoadingIndicator />}>
          <DooDooTaskGroupList></DooDooTaskGroupList>
          <DooDooInput></DooDooInput>
        </React.Suspense>
      </DooDooErrorBoundary>
    </div>
  );
};
