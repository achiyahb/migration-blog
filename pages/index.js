import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import OgMetaTags from "../components/OgMetaTags";
import Posts from "../components/Posts";
import {server} from "../config";

export default function Home({posts}) {

  return (
    <div>
        <OgMetaTags
            description="טכנולוגיה, קוד ושאר הדברים המרגשים" img="https://firebasestorage.googleapis.com/v0/b/text-editor-prokit.appspot.com/o/undraw_feeling_proud_qne1.png?alt=media&token=7f7aba45-fa17-4c71-82a6-f9a81b07aabb"
            title="ברוכים הבאים לMigraion" url="https://d17tfpwcy3k48c.cloudfront.net/"
        />
        <div className={styles.Home_Container}>
            <div className={styles.text_div}>
                <h3>
                    היי כולם!
                </h3>
                <p>שמי אחיה, מפתח full stack </p>
                <p>התהליך שעברתי, ממנהל עסק של חוגים לילדים למפתח web
                , כולל: לימוד עצמי, קורס פולסטאק ועבודה בתחום</p>
                <p>בדרך שלי אני מרגיש כמהגר שמגלה בכל יום עולם חדש ומופלא</p>
                <p>ואני אשמח לשתף אתכם בחוויות שלי, ובתובנות מהדרך שעברתי</p>
                <br/>
                <p>הבלוג יתחלק לשני חלקים</p>
                <p>חלק בו אעלה פוסטים טכניים</p>
                <p>וחלק בו אעסוק בתחומים הקשורים יותר בתהליך הלמידה, במיינדסט ובהתפחות אישית בתחום התכנות</p>
            </div>
            <div >
                <img className={styles.img_div} src="https://firebasestorage.googleapis.com/v0/b/text-editor-prokit.appspot.com/o/undraw_feeling_proud_qne1.svg?alt=media&token=545e424d-4424-4997-9d50-89ec40f58c26"/>
            </div>
        </div>
        <Posts posts={posts}/>
    </div>
  )
}


export const getServerSideProps = async () => {
    const res = await fetch(`${server}/api/posts`)
    const posts = await res.json()
    return {
        props: posts
    }
}
