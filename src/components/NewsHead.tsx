import { noticeObject } from '../components/NewsPage'

interface newsProps {
    notice: noticeObject
}

export function NewsHead({notice}: newsProps){
    return(
        <>
            <div 
            className='h-48 w-full bg-center bg-cover md:h-80 md:rounded blur-sm'
            style={{backgroundImage: `url(${notice?.midia[0].midiapath})`}}>
            </div>
            <div className='w-full md:w-4/6 h-32 bg-slate-900 rounded-b-3xl shadow-xl flex relative'>
                <div>
                    <div className='font-bold font-kadwa text-xl m-4 text-white md:text-3xl'>{notice?.noticiatitulo}</div>
                </div>
                <div className='text-cyan-400 font-kadwa ml-5 absolute right-2'>{notice?.noticiadatacadastro.split('-').reverse().join('/')}</div>
                <div className='flex items-center gap-2 absolute right-2 bottom-2'>
                    <div 
                        className='w-10 h-10 bg-center bg-cover rounded-full'
                        style={{backgroundImage: `url(${notice?.user_iduser.midia.midiaprofilepath})`}}></div>
                    <div className='text-white font-kadwa'>{notice?.user_iduser.username}</div>
                </div>
            </div>
        </>
    )
}