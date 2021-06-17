import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="es-MX">
                <Head>
                    <link rel="apple-touch-icon" type='image/png' sizes="180x180" href="/favicons/apple-touch-icon.png?v=Gv6nAlj7bz" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png?v=Gv6nAlj7bz" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png?v=Gv6nAlj7bz" />
                    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=Gv6nAlj7bz" color="#5bbad5" />
                    <link rel="shortcut icon" href="/favicons/favicon.ico?v=Gv6nAlj7bz" />
                    <meta name="theme-color" content="#f4f4f4" />
                    {/* Global site tag (gtag.js) - Google Analytics */}
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=G-GPMR08P54M`}
                        strategy="afterInteractive"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());
                            gtag('config', 'G-GPMR08P54M', {
                                page_path: window.location.pathname,
                            });
                            `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
