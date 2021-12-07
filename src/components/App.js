import React, { Component, Suspense } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const RemoteComponent = React.lazy(() => import('remoteApp/RemoteComponent')); // https://ru.reactjs.org/docs/code-splitting.html#reactlazy
console.log('RemoteComponent:', RemoteComponent);

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>
                    My React App! (Host)
                </h1>
                <ErrorBoundary>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <RemoteComponent />
                    </Suspense>
                    <div/>
                </ ErrorBoundary>
            </div>
        );
    }
}

export default App;
