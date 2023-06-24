import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Render apps only once DOM content has finished loading.
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app');
    if (!container) {
        return;
    }

    ReactDOM.createRoot(container).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
});
