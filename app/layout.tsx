

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="p-4">
        <header className="text-xl font-semibold mb-4 flex gap-4">
          <a href="/">Home</a>
          <a href="/tasks">Tasks</a>
        </header>
        {children}
        </body>
    </html>
  );
}

