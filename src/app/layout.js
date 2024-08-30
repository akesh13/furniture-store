import { Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: "furniture store",
  description: "Your best destination for furniture",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={montserrat.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Provider>
            {children}
          </Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
