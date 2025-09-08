import ChatBubble from '@/components/common/ChatBubble';
import { generateMetadata as getPageMetadata } from "@/config/meta";
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import './globals.css';
import Providers from '@/components/common/Providers';
// import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';


export const metadata = getPageMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`font-hanken-grotesk antialiased`}>
          <Providers>
          <ReactLenis root>
            {children}
            <ChatBubble />
            {/* <UmamiAnalytics /> */}
          </ReactLenis>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}