import React, { Component, Suspense } from "react";

const Button = React.lazy(() => import('remoteApp/Button'));

import '../styles/App.css';

console.log('Button', Button);
class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App! (Host)</h1>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <Button />
                </Suspense>
            </div>
        );
    }
}

export default App;
