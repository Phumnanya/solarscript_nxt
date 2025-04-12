import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata = {
  title: "Solarscript Technologies",
  description: "Affordable Solar installation with guaranteed 24 hours power supply",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="./icon.jpg" />
    </head>
      <body style={{fontFamily: "Arial, Helvetica, sans-serif"}}>
        {children}
      </body>
    </html>
  );
}
