import loginForm from '../components/loginForm'

export default {
    path: '/login',
    name: 'Login',
    component: loginForm,
    meta: {
        requiresAuth : false
    }
}