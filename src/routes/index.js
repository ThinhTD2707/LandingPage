//Layout
import { DifferentLayout } from '../layouts';

import Home from '../pages/Home';
import Register from '../pages/Register';
import TheLe from '../pages/TheLe';

const publicRoute = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/thele', component: TheLe },
    // { path: '/detail', component: Detail, layout: DifferentLayout },
];
const privateRoute = [];

export { publicRoute, privateRoute };
