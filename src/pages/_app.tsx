import { AppProps } from 'next/app';
import '@/styles/global.css';
import '../styles/tailwindcss.css';
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
