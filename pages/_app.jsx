import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>People Manager</title>
          <link href="/main.css" rel="stylesheet" key="main" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
