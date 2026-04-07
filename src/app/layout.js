import './globals.css';

export const metadata = {
  title: 'Shubh Rajawat | Full Stack Developer',
  description: 'Portfolio of Shubh Rajawat, Full Stack Developer specializing in React.js, Next.js, and the MERN stack. View my work, experience, and projects.',
  keywords: 'Shubh Rajawat, Full Stack Developer, React.js, Next.js, MERN Stack, Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" >
        <div id="root-app">
          {children}
        </div>
      </body>
    </html>
  );
}
