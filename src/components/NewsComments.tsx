import { noticeUserType } from './NewsPage'
import { useState, useEffect } from 'react'
import { api } from '../plugins/axios'


interface propsComments{
    newsID: number 
}

interface typeComment{
    datacomentario: string,
    id: number,
    noticia_idnoticia: number,
    textocomentario: string,
    user_iduser: noticeUserType,
}

export function NewsComments({newsID}: propsComments){

    const [comments, setComments] = useState<typeComment[]>()

    async function getComments(){
        const { data } = await api.get(`/comentarios/?idnoticia=${newsID}`)
        setComments(data.reverse())
    }

    useEffect(()=>{
        getComments()
    },[])

    return (
        <div className='w-full text-white flex flex-col gap-2 font-kadwa items-center'>   
            {
                comments && 
                (
                    comments.map((comment: typeComment)=>{
                        return (
                             <div key={comment.id} className='flex flex-col min-w-full md:min-w-0 bg-cyan-800 md:w-3/6 rounded'>
                                <div className='flex items-center text-lg justify-between p-2'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='w-10 h-10 rounded-full bg-cover bg-center' style={{backgroundImage: `url('${comment.user_iduser?.midia?.midiaprofilepath}')`}}></div>
                                        <div>{comment.user_iduser.username}</div>
                                    </div>
                                    <div className='text-slate-900'>{comment.datacomentario.split('-').reverse().join('/')}</div>
                                </div>
                                <div className='m-3'>{comment.textocomentario}</div>
                             </div>
                            
                        )
                    })
                )
            }
        </div>
    )
}