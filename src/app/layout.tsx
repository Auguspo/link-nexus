import '../index.css'; 

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang='es'>
      <body className="font-sans antialiased bg-gray-200">{children}</body>
    </html>
  );
}
