import Home from '@/components/Home';
const Community = () => import('@/components/Community');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/community',
        name: 'Community',
        component: Community
    }
];

export default routes;