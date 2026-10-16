import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
