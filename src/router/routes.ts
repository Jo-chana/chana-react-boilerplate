import { Home } from '../pages/home';

interface IRouteItem {
    name: string;
    exact?: boolean;
    component: any;
    path: string;
}

export const Routes: IRouteItem[] = [
    {
        name: 'home',
        exact: true,
        component: Home,
        path: '/'
    }
]