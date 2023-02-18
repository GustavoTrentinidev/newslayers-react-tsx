import { useEffect, useRef, useState } from 'react'
import { noticeObject } from './NewsPage'


interface newsTextProps{
    news: noticeObject
}

export function NewsText({news} : newsTextProps){
    
    const [fullText, setFullText] = useState(news.texto) 
    function formatText(){
        let formattedText = fullText
        formattedText = formatSubtitles(formattedText)
        formattedText = formatParagraphs(formattedText)
        formattedText = formatImages(formattedText)
        setFullText(formattedText)
    }

    function formatSubtitles(text: string){
        return text.replaceAll('<h1>', '<h1 class="my-4 font-bold text-3xl">')
    }

    function formatParagraphs(text: string){
        return text.replaceAll('<p>', '<p class="my-7">')
    }

    function formatImages(text: string){
        const newsMidiaWithoutBanner = news.midia.slice(1,news.midia.length)
        let textWithImage = text
        for(let i of newsMidiaWithoutBanner){
            textWithImage = textWithImage.replace('<img>',`<div class='w-6/6 h-96 my-12 bg-center bg-cover' style='background-image: url("${i.midiapath}")'></div>`)
        }
        return textWithImage
    }

    useEffect(() => {
        formatText()
    },[fullText])
    

    return(
        <div className='w-5/6 md:w-7/12'>
            {
                fullText &&
                <div className='md:w-auto w-6/7 text-xl text-start ' dangerouslySetInnerHTML={{__html: fullText}}></div>
            }
        </div>
    )
}