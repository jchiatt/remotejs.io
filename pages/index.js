import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NewsletterSignup from '../components/NewsletterSignup';

export default function HomePage() {
  return (
    <>
      <Header />
      <Head>
        <title>Remote JavaScript Events | RemoteJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <NewsletterSignup />
      </main>

      <Footer />
    </>
  );
}
