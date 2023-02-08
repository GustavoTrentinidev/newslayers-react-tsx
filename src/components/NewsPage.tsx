import { useState, useEffect } from 'react'
import { api } from '../plugins/axios'

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
    midiapath: string
}

interface noticeUserType {
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

interface commentaryType {
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
        console.log(data)
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
                            <div key={notice.id} className='w-11/12 h-40 bg-center bg-cover relative rounded-sm md:w-3/12 md:h-52' 
                            style={{backgroundImage: `url(${notice.midia[0].midiapath})`}}
                            >
                                <div className='w-full h-full bg-gradient-to-r bg-opacity-50 from-black relative'>
                                    <div className='text-white absolute font-kadwa bottom-0 p-2'>{notice.noticiatitulo}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex gap-1 items-center w-screen justify-center p-4'>
                {
                    news?.previous
                    ?
                    <button className='bg-slate-900 text-white w-6 h-6 flex items-center justify-center text-xl font-kadwa rounded' onClick={()=>{setPage(page-1)}}>&lsaquo;</button>
                    : 
                    null
                }
                <div className='bg-slate-900 text-white w-6 h-6 flex items-center justify-center text-lg font-kadwa'>{page}</div>
                {
                    news?.next
                    ?
                    <button className='bg-slate-900 text-white w-6 h-6 flex items-center justify-center text-xl font-kadwa rounded' onClick={()=>{setPage(page+1)}}>&rsaquo;</button>
                    :
                    null
                }
            </div>
        </div>
    )
}
