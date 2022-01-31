import Head from "next/head";
import React from 'react'
import crossEnv from "cross-env";


export default function OgMetaTags({url, title, description, img}) {

    const googleAnalyticsTrackingId = crossEnv(process.env.GOOGLE_ANALYTICS_TRACKING_ID);

    return (
        <div>
            <Head>
                <title>
                    {title}
                </title>
                <meta name="twitter:image" content={img}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={url}/>
                <meta
                    property="og:title"
                    content={title}
                />
                <meta
                    property="og:description"
                    content={description}
                />
                <meta property="og:image" content={img}/>
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsTrackingId}`}
                />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsTrackingId}', { page_path: window.location.pathname });
            `,
                    }}
                />
            </Head>
        </div>
    );
}





