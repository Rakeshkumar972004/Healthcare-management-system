import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) { localStorage.setItem('user', email); navigate('/dashboard'); }
    };

    return (<div className="p-4 max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
            <input type="email" placeholder="Email or Username" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border" /> <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button> </form> </div>);
};

export default Login;
