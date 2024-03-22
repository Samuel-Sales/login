import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import PaginaPrincipal from './pages/PaginaPrincipal.jsx';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/PaginaPrincipal' element={<PaginaPrincipal />} />
            </Routes>
        </Router>
    );
};