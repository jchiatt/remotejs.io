import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NewsletterSignup from '../components/NewsletterSignup';
import PlannedWorkshops from '../components/PlannedWorkshops';

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
        <PlannedWorkshops />
      </main>

      <Footer />
    </>
  );
}
