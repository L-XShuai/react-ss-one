import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Home from '../pages/Home'
// import About from '../pages/About'

/**
 *  path: '/about',
    title: '关于我们',
    icon: 'home',
    component: 'About',
    children: []
 */

// 导入文件
const requireRouter = require.context('./modules', true, /\.js$/)
// 打印 文件路径 和 文件名
// console.log(requireRouter.keys())

const routerContent = []

requireRouter.keys().forEach((file) => {
  // file 文件名
  // 拿出文件里面的内容
  const routerFileContent = requireRouter(file).default

  // 判断是否是数组
  if (Array.isArray(routerFileContent)) {
    // 是数组展开
    routerContent.push(...routerFileContent)
  } else {
    routerContent.push(routerFileContent)
  }
})

const childrenRouter = []
routerContent.map(item => {
  if (item.children) {
    childrenRouter.push(...item.children)
  }
})

const routerList = [ ...childrenRouter, ...routerContent ]

function RouterGather() {

  return (

      <Router>

        {
          routerList.map((item, i) => (

              <Route
                key={i}
                exact
                path={item.path}
                component={item.component}
              />

          ))
        }

      </Router>

  )

}

export default RouterGather