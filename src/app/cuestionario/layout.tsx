export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="m-8">
      {children}
    </body>
  )
}