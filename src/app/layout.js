import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Import Dancing Script for the signature */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Import Roboto for general body text */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background antialiased text-white min-h-screen min-w-screen">
        <div className="flex flex-col min-h-screen">
          <div className="flex justify-center items-center w-full h-[7vh]">
            <Navbar />
          </div>
          <div style={{ height: '93vh', overflowY: 'auto' }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
