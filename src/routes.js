
import CompareForm from './components/CompareForm.vue'
import Compare from './components/Compare.vue'

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
