import Admin from './pages/Admin';
import Auth from './pages/Auth';

export const authRoutes = [
    {
        path: '/admin',
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: '/registration',
        Component: Auth
    },
    {
        path: '/login',
        Component: Auth
    }
]