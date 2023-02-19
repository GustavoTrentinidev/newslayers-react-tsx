import { useParams } from 'react-router-dom'
import { api } from '../plugins/axios'
import { noticeObject } from '../components/NewsPage'
import { useEffect, useState } from 'react'
import { NewsHead } from '../components/NewsHead'
import { NewsText } from '../components/NewsText'
import { NewsComments } from '../components/NewsComments'
import { RelatedContent } from '../components/RelatedContent'


export function NewsTemplate(){
    const { id } = useParams()

    const [news, setNews] =  useState<noticeObject>()    

    async function getNews(){
        const {data} = await api.get(`noticias/${id}`)
        setNews(data)
    }
    
    useEffect(()=>{
        getNews()
    },[])

    return (
        <div>
            <div className='w-full flex flex-col items-center'>
                    {
                        news && (
                            <>
                                <NewsHead notice={news!}/>
                                <NewsText news={news}/>
                                <NewsComments newsID={news.id}/>
                                <RelatedContent news={news}/>
                            </>
                        )
                    }                   
            </div>
        </div>
    )
}   