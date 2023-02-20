import { RelatedContent } from "./RelatedContent"
import { NewsComments } from "./NewsComments"
import { noticeObject } from "./NewsPage"
import { useState } from "react"

interface rcProps{
    news: noticeObject
}

export function RelatedAndComents({news}: rcProps){

    const [showHandler, setShowHandler] = useState<string>('comment')
    
    return (
        <div className="w-full flex flex-col items-center bg-slate-900">
            <div className="flex gap-5 text-xl font-kadwa">
                <div 
                    className={'cursor-pointer ' + (showHandler ==  'comment' ? 'text-white underline decoration-sky-500' : 'text-gray-500')}
                    onClick={()=>{setShowHandler('comment')}}>Comentários</div>
                <div 
                    className={'cursor-pointer ' + (showHandler ==  'related' ? 'text-white underline decoration-sky-500' : 'text-gray-500')}
                    onClick={()=>{setShowHandler('related')}}>Relacionado</div>
            </div>
            {
                showHandler == 'comment' 
                ? <NewsComments newsID={news.id}/> 
                : <RelatedContent news={news}/>
            }
        </div>
    )
}