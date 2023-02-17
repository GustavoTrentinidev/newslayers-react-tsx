import { useParams } from 'react-router-dom'
import { api } from '../plugins/axios'
import { noticeObject } from '../components/NewsPage'
import { useEffect, useState } from 'react'
import { NewsHead } from '../components/NewsHead'


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
                <NewsHead notice={news!}/>
                <div className='w-5/6 md:w-4/6'>
                    {/* <div className='md:w-auto w-6/7' dangerouslySetInnerHTML={{__html: news!.texto}}></div> */}
                </div>
            </div>
        </div>
    )
}   