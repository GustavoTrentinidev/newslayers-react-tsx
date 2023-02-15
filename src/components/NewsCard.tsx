import { noticeObject } from './NewsPage'
import { useNavigate } from 'react-router-dom'


interface propsNotice {
    notice: noticeObject
}

export function NewsCard({ notice } : propsNotice ){
    const navigate = useNavigate()
    function goToNewsRoute(id: number){
        navigate(`/news/${id}`)
    }


    return(
        <div key={notice.id} onClick={()=>{goToNewsRoute(notice.id)}} className='w-11/12 h-40 bg-center bg-cover relative rounded-sm md:w-3/12 md:h-52 hover:scale-105 transition-all cursor-pointer group' 
            style={{backgroundImage: `url(${notice.midia[0].midiapath})`}}
        >
            <div className='w-full h-full bg-gradient-to-r bg-opacity-50 from-black relative group-hover:bg-gradient-to-l group-hover:bg-opacity-25 transition-colors'>
                <div className='text-white absolute font-kadwa bottom-0 p-2'>{notice.noticiatitulo}</div>
            </div>
        </div>
    )
}