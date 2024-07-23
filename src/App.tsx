import React from 'react';
import Stars from './components/Stars';
import './App.css';

const App: React.FC = () => {
    return (
        <div>
            <h1>Movie Ratings</h1>
            <Stars count={1} />
            <Stars count={3} />
            <Stars count={5} />
            {/* Invalid count, should render nothing */}
            <Stars count={6} />
            <Stars count={-1} />
        </div>
    );
};

export default App;