import localFont from 'next/font/local'
import Image from 'next/image'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
    title: {
        default: 'Beequip for developers – Documentation',
        template: '%s – Beequip Developer',
    },
    openGraph: {
        url: 'https://developer.beequip.com',
        siteName: 'Beequip Developer',
        locale: 'en_US',
        type: 'website',
    },
}

const gotham = localFont({
    variable: '--font-gotham-ssm',
    src: [
        {
            path: '../../public/fonts/GothamSSm-Light_Web.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GothamSSm-Book_Web.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GothamSSm-Medium_Web.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GothamSSm-Bold_Web.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GothamSSm-Black_Web.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
})

const yellix = localFont({
    variable: '--font-yellix',
    src: [
        {
            path: '../../public/fonts/Yellix-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Yellix-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
})

const navbar = (
    <Navbar
        logo={
            <Image
                src="/logo.svg"
                alt="Beequip"
                width="110"
                height="31"
                unoptimized
            />
        }
        projectLink="https://github.com/BEEQUIP/developer.beequip.com"
    />
)

export default async function RootLayout({ children }) {
    return (
        <html
            lang="en"
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head
                backgroundColor={{
                    dark: '#1c4259',
                    light: '#fff',
                }}
                color={{
                    hue: 38,
                    saturation: 100,
                }}
            >
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon-96x96.png"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#ffa100" />
            </Head>
            <body>
                <Layout
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/BEEQUIP/developer.beequip.com/tree/master"
                    editLink="Edit this page on GitHub"
                    sidebar={{ defaultMenuCollapseLevel: 1 }}
                    footer={<></>}
                    darkMode={true}
                >
                    <div className={`${gotham.className} ${yellix.variable}`}>
                        {children}
                    </div>
                </Layout>
            </body>
        </html>
    )
}
