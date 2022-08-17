export default {
    name: 'daybook',
    component: () => import( /* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayouts.vue'),
    children: [
        {
        path: '',
        name: 'no-entry',
        component: () => import( /* webpackChunkName: "no-entry" */ '@/modules/daybook/views/NotEntrySeleted.vue'),
        },
        {
            path: ':id',
            name: 'entry-view',
            component: () => import( /* webpackChunkName: "enty-view" */ '@/modules/daybook/views/EntryView.vue'),
            }
]
}