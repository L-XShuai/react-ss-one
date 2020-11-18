import React from 'react';

import { Link, useHistory } from 'react-router-dom'

// import Layout from '../../layout'

function Home() {

  const history = useHistory()

  const ann = () => {
    console.log(123)
    history.push('/home/foo');
  }

  return (
    <>
      {/* <Layout /> */}
      <button onClick={ann} >按钮</button>
      <Link to="/home/foo">跳转</Link>
    </>
  )

}

export default Home