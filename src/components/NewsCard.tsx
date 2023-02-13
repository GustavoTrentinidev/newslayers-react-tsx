import { noticeObject } from './NewsPage'


interface propsNotice {
    notice: noticeObject
}

export function NewsCard({ notice } : propsNotice ){
    return(
        <div key={notice.id} className='w-11/12 h-40 bg-center bg-cover relative rounded-sm md:w-3/12 md:h-52' 
            style={{backgroundImage: `url(${notice.midia[0].midiapath})`}}
        >
            <div className='w-full h-full bg-gradient-to-r bg-opacity-50 from-black relative'>
                <div className='text-white absolute font-kadwa bottom-0 p-2'>{notice.noticiatitulo}</div>
            </div>
        </div>
    )
}