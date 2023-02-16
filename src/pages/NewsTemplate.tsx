import { useParams } from 'react-router-dom'
import { api } from '../plugins/axios'
import { noticeObject } from '../components/NewsPage'
import { useEffect, useState } from 'react'


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
                <div 
                    className='h-48 w-full bg-center bg-cover md:h-80 md:rounded blur-sm'
                    style={{backgroundImage: `url(${news?.midia[0].midiapath})`}}>
                </div>
                <div className='w-full md:w-4/6 h-32 bg-slate-900 rounded-b-3xl shadow-xl flex relative'>
                    <div>
                        <div className='font-bold font-kadwa text-xl m-4 text-white md:text-3xl'>{news?.noticiatitulo}</div>
                    </div>
                    <div className='text-cyan-400 font-kadwa ml-5 absolute right-2'>{news?.noticiadatacadastro.split('-').reverse().join('/')}</div>
                    <div className='flex items-center gap-2 absolute right-2 bottom-2'>
                        <div 
                            className='w-10 h-10 bg-center bg-cover rounded-full'
                            style={{backgroundImage: `url(${news?.user_iduser.midia.midiaprofilepath})`}}></div>
                        <div className='text-white font-kadwa'>{news?.user_iduser.username}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}   