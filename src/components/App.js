import React, { Component, Suspense } from 'react';
import { SimpleComponent } from './SimpleComponent';
import { ErrorBoundary } from './ErrorBoundary';

const RemoteComponent = React.lazy(() => import('remoteApp/RemoteComponent')); // https://ru.reactjs.org/docs/code-splitting.html#reactlazy
console.log('RemoteComponent:', RemoteComponent);

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>
                    React App (Host)
                </h1>
                <SimpleComponent />
                <ErrorBoundary>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <RemoteComponent />
                    </Suspense>
                    <div/>
                </ ErrorBoundary>
                <SimpleComponent />
            </div>
        );
    }
}

export default App;
