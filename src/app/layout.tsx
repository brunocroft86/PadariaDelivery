// src/app/layout.tsx

export const metadata = {
  title: 'Padaria Real - Delivery',
  description: 'Faça seu pedido de pão quentinho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}