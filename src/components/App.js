import React, { Component, Suspense } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const Button = React.lazy(() => import('remoteApp/Button')); // https://ru.reactjs.org/docs/code-splitting.html#reactlazy
console.log('Button:', Button);

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
                        <Button />
                    </Suspense>
                    <div/>
                </ ErrorBoundary>
            </div>
        );
    }
}

export default App;
