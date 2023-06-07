import './globals.css';

export const metadata = {
  title: 'DerTimonius',
  description: 'Portfolio of developer/photographer Timon Jurschitsch',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body> {children}</body>
    </html>
  );
}
