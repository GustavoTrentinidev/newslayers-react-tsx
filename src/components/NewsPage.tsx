import { useState, useEffect } from 'react'
import { api } from '../plugins/axios'
import { NewsCard } from './NewsCard'


export interface newsObjectType {
    count: number,
    next: string,
    previous: Array<noticeObject>,
    results: Array<noticeObject>
}

export interface noticeObject {
    id: number,
    midia: Array<noticeMidiaType>,
    user_iduser: noticeUserType,
    topico_idtopico: noticeToppicType,
    comentarios: Array<commentaryType>,
    curtidas: Array<noticeLikeType>,
    noticiatitulo: string,
    texto: string,
    noticiadatacadastro: string
}

interface noticeMidiaType {
    midiapath: string, 
}

export interface noticeUserType {
    username: string
    id: number
    midia: midiaUserType
}

interface midiaUserType{
    id: number
    midiabannerpath: string
    midiaprofilepath: string
}

interface noticeToppicType {
    id: number
    nometopico: string
}

export interface commentaryType {
    id: number
    datacomentario: string
    textocomentario: string
    user_iduser: number
}

interface noticeLikeType {
    iduser: number
}


export function NewsPage(){
    let [page, setPage] = useState<number>(1)
    let [news, setNews] = useState<newsObjectType>()

    async function getNews(page: number){
        const {data} = await api.get(`noticias/?page=${page}`)
        setNews(data)
    }

    useEffect(() => {
        getNews(page)
    },[page])
    
    return(
        <div className='md:flex md:flex-col w-full'>
            <div className='flex flex-col gap-4 items-center mt-4 md:flex-row md:flex-wrap md:justify-center md:items-center'>
                {      
                    news?.results.map((notice: noticeObject)=>{
                        return(
                            <NewsCard key={notice.id} notice={notice}/>
                        )
                    })
                }
            </div>
            <div className='flex gap-1 items-center w-full justify-center p-4'>
                {
                    news?.previous && (
                        <button className='bg-slate-900 text-white w-6 h-6 flex items-center justify-center text-xl font-kadwa rounded' onClick={()=>{setPage(page-1)}}>&lsaquo;</button>
                    )
                }
                <div className='bg-slate-900 text-white w-6 h-6 flex items-center justify-center text-lg font-kadwa'>{page}</div>
                {
                    news?.next && (
                        <button className='bg-slate-900 text-white w-6 h-6 flex items-center justify-center text-xl font-kadwa rounded' onClick={()=>{setPage(page+1)}}>&rsaquo;</button>
                    )
                }
            </div>
        </div>
    )
}
