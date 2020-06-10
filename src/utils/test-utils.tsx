import { render as testingRender, RenderOptions } from '@testing-library/react';
import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

const AllTheProviders: React.FC = ({ children }) => {
    return <RecoilRoot>{children}</RecoilRoot>;
};

const Suspenseful: React.FC = ({ children }) => {
    return (
        <AllTheProviders>
            <Suspense fallback="test loading">{children}</Suspense>
        </AllTheProviders>
    );
};

const renderWithProviders = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
    testingRender(ui, { wrapper: AllTheProviders, ...options });

const renderSuspending = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
    testingRender(ui, { wrapper: Suspenseful, ...options });

const renderHookWithProviders = <P, R>(
    hook: (props: P) => R,
    options?: Omit<RenderOptions, 'queries'>
): RenderHookResult<P, R> => renderHook(hook, { wrapper: AllTheProviders, ...options });

const renderHookSuspending = <P, R>(
    hook: (props: P) => R,
    options?: Omit<RenderOptions, 'queries'>
): RenderHookResult<P, R> => renderHook(hook, { wrapper: Suspenseful, ...options });

export * from '@testing-library/react';
export { renderWithProviders as render };
export { renderHookWithProviders as renderHook };
export { renderSuspending };
export { renderHookSuspending };
