import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
// import { ServerStyleSheet } from 'styled-components'

//let dataTheme: string
//dataTheme=""

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR" data-theme="mytheme">
        <Head>
          <meta name='application-name' content='Árvore da Vida' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Árvore da Vida' />
          <meta name='description' content='Árvore da Vida Confecção & Estamparia' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
          <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />

          <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://avcustomize.com.br' />
          <meta name='twitter:title' content='Árvore da Vida' />
          <meta name='twitter:description' content='Árvore da Vida - Confecção & Estamparia' />
          <meta name='twitter:image' content='https://avcustomize.com.br/icons/android-chrome-192x192.png' />
          <meta name='twitter:creator' content='Valmor Nascimento' />

          <meta property='og:type' content='website' />
          <meta property='og:title' content='Árvore da Vida' />
          <meta property='og:description' content='Árvore da Vida - Confecção & Estamparia' />
          <meta property='og:site_name' content='Árvore da Vida' />
          <meta property='og:url' content='https://avcustomize.com.br' />
          <meta property='og:image' content='https://avcustomize.com.br/icons/apple-touch-icon.png' />

          {/* <title>AV Customize</title> */}
          {/* 
            Fonts must be declared within _document.tsx
            https://nextjs.org/docs/messages/no-page-custom-font
          */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
