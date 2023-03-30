import Head from 'next/head'
import data from '../data/data'
import Product from '../components/Product'
import Layout from '../components/Layout'


export default function Home() {
  return (

    <Layout >
      <div className="max-w-screen-2xl mx-auto py-28 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data.products.map((product) => (
          <Product key={product.slug} product={product}>
          </Product>
        ))}
      </div>
    </Layout>

  )
}
