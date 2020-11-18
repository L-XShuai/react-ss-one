import Home from '../../pages/Home'
import Foo from '../../pages/Home/Foo'

export default [
  {
    path: '/',
    title: '首页',
    icon: 'home',
    component: Home,
    // component: () => import('../../pages/Home'),
    children: [
      {
        path: '/home/foo',
        title: 'foo',
        icon: 'foo',
        component: Foo,
      }
    ]
  }
]