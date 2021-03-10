import Head from "next/head";
import React from 'react'

export default function OgMetaTags({url,title,description,img}) {
    return (
        <div>
            <Head>
                <title>
                    {title}
                </title>
                <meta name="twitter:image" content={img}/>
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url}/>
                <meta
                    property="og:title"
                    content={title}
                />
                <meta
                    property="og:description"
                    content={description}
                />
                <meta property="og:image"  content={img}/>
            </Head>
        </div>
    );
}





