import StyledComponentsRegistry from './registry'
import './globals.css'
import Header from './global/ui/outlines/Header'
import Footer from './global/ui/outlines/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
