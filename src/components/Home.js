import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {console.log('wtf')
  return (
    <Layout>
      <p>Hello World!!!!!!!!!!!</p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;
