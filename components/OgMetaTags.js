import Head from "next/head";
import React, {useEffect} from 'react'

export default function OgMetaTags({url,title,description,img}) {
    useEffect(()=>{
       console.log({url,title,description,img})
    },[])
    return (
        <div>
            <Head>
                <title>
                    {title}
                </title>
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url}/>
                <meta name="twitter:card" content="summary" />
                <meta
                    property="og:title"
                    content={title}
                />
                <meta
                    property="og:description"
                    content={description}
                />
                <meta property="og:image" content={img} />
            </Head>
        </div>
    );
}



// <meta property="fb:app_id" content="your fb app id" />

