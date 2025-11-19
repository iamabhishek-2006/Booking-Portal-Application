import React from 'react'
import Layout from '../components/Layout'
import  { withAuth } from "../components/withAuth"

const Passengers = () => {
  return (
    <Layout>
      <div>Passengers</div>
    </Layout>
  );
}

export default withAuth(Passengers)