import About from '../../pages/About'

export default [
  {
    path: '/about',
    title: '关于我们',
    icon: 'home',
    component: About,
    // component: () => import('../../pages/About'),
    // component: '../pages/About',
    // children: []
  }
]