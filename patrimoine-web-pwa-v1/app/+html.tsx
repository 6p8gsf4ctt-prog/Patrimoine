import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#111827" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Patrimoine" />
        <link rel="manifest" href="/Patrimoine/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/Patrimoine/icons/icon-192.png" />
        <ScrollViewStyleReset />
      </head>
      <body>{children}
        <script dangerouslySetInnerHTML={{__html:`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
              navigator.serviceWorker.register('/Patrimoine/service-worker.js', { scope: '/Patrimoine/' });
            });
          }
        `}} />
      </body>
    </html>
  );
}
