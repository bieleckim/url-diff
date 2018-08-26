
import CompareForm from './views/CompareForm.vue'
import Compare from './views/Compare.vue'

export const routes = [
    {
        path: '/',
        name: 'compareForm',
        component: CompareForm,
    },
    {
        path: '/compare/:first/:second',
        name: 'compare',
        component: Compare,
        props: true,
    }
];
