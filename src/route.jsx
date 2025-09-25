import { createBrowserRouter } from 'react-router'
import Cart from './components/pages/Cart'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Cart/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/signin',
        element: <SignIn/>
    }
])