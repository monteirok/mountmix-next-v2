import Navbar from './components/Navbar/Navbar';
import './globals.css';

export const metadata = {
  title: "Mountain Mixology",
  description: "A premium cocktail catering service, based in Canmore, AB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-300 text-5xl sm:text-7xl text-neutral-900 text-center font-bold select-none">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
