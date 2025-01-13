import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import RegisterForm from './components/RegisterForm'; // Importez RegisterForm depuis le bon chemin
import ProjectList from './components/ProjectList'; // Importez ProjectList depuis le bon chemin
import TaskList from './components/TaskList'; // Importez TaskList depuis le bon chemin

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Routes>
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route
                        path="/projects"
                        element={<ProjectList />}
                    />
                    <Route
                        path="/tasks/:projectId/*"
                        element={<TaskList />}
                    />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
