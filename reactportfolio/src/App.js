import { useState } from 'react';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';

function App() {
    const [page, setPage] = useState('about me');
    return (
        <div className='App'>
            <Header setPage={setPage} page={page} />
            <Home page={page} />
            <Footer />
        </div>
    )
};

export default App;