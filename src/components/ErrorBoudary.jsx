import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';

const ErrorBoudary = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>Помилка: {error.status}: {error.statusText}</div>
        );
    }
    return (
        <div>
            
        </div>
    );
}

export default ErrorBoudary;
