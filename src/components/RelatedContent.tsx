import { useEffect, useState } from 'react'
import { api } from '../plugins/axios'
import { noticeObject } from './NewsPage'
import { NewsCard } from './NewsCard'


interface newsType {
    news: noticeObject
}


export function RelatedContent({news} : newsType){

    const [newsNotCurrent, setNewsNotCurrent] = useState<Array<noticeObject>>([])

    async function getNews(){
        const {data} = await api.get(`/noticias/?idtopico=${news.topico_idtopico.id}`)
        filterNews(data.results)
    }

    function filterNews(allNewsOfTopic: Array<noticeObject>){
        const newsWithoutCurrentNews = allNewsOfTopic!.filter((FILTER_NEWS)=>{
            return FILTER_NEWS.id != news.id
        })
        console.log(newsWithoutCurrentNews)
        setNewsNotCurrent(newsWithoutCurrentNews)
    }

    useEffect(()=>{
        getNews()
    }, [])
 
    return (
        <div className='md:flex md:flex-col w-full'>
            <div className='flex flex-col gap-4 items-center mt-4 md:flex-row md:flex-wrap md:justify-center md:items-center'>
                {
                    newsNotCurrent?.map((newsRelated)=>{
                        return (
                            <NewsCard key={newsRelated.id} notice={newsRelated}/>
                        )
                    })
                }
            </div>
        </div>
    )
}