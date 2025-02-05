import StyledJsxRegistry from "./registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledJsxRegistry>{children}</StyledJsxRegistry>
    </html>
  );
}
