import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="es-MX">
                <Head>
                    {/* <link rel="shortcut icon" href="https://reserbaja.com/favicon/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="https://reserbaja.com/favicon/apple-touch-icon.png" />
                    <link rel="apple-touch-icon" sizes="192x192" href="https://reserbaja.com/favicon/icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="https://reserbaja.com/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="https://reserbaja.com/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/manifest.webmanifest" />
                    <link rel="mask-icon" href="https://reserbaja.com/favicon/favicon.ico"/>
                    <meta name="theme-color" content="#fff" /> */}
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=Gv6nAlj7bz" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=Gv6nAlj7bz" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=Gv6nAlj7bz" />
                    <link rel="manifest" href="/site.webmanifest?v=Gv6nAlj7bz" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg?v=Gv6nAlj7bz" color="#5bbad5" />
                    <link rel="shortcut icon" href="/favicon.ico?v=Gv6nAlj7bz" />
                    <meta name="msapplication-TileColor" content="#b91d47" />
                    <meta name="theme-color" content="#ffffff" />
                    {/* Global site tag (gtag.js) - Google Analytics */}
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
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
