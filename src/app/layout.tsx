
import React from 'react';
import '../index.css'; 

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (<>
    <head>
    <title>Link Nexus</title>
    <link rel="shortcut icon" href="/icon.png" />
  </head>
    <html lang='es'>
   
      <body className="font-sans antialiased bg-gray-200">{children}</body>
    </html></>
  );
}
