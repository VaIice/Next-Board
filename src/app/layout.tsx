import Header from '@/app/components/layout/Header';
import BackgroundWithDots from '@/app/components/layout/Background';
import Providers from '@/app/components/common/providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <Providers>
          <BackgroundWithDots>
            <Header />
            {children}
          </BackgroundWithDots>
        </Providers>
      </body>
    </html>
  );
}
