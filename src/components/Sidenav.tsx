import { VscThreeBars } from 'react-icons/vsc';
import { MdClose } from 'react-icons/md';
import { useState } from 'react'

import { ClipPath } from './Header';


export function Sidenav(){
    let [expanded, setExpanded] = useState<boolean>(false)
    let [noticiasExpanded, setNoticiasExpanded] = useState<boolean>(false)
    function expand(){
        setExpanded(!expanded)
    }

    const AvailableTopics = ['LOL', 'VALORANT', 'TFT', 'Wild Rift', 'Runeterra']

    return(
        <>
            <VscThreeBars onClick={expand} size={35} className='md:hidden justify-self-start'/>
            {
                expanded 
                ? 
                <div className={"z-10 w-screen h-screen bg-black bg-opacity-50 top-0 left-0 absolute md:hidden"} onClick={(e)=>{e.stopPropagation()}}>
                    <div className={"absolute top-0 left-0 h-2/3 w-screen bg-slate-900 rounded-b-3xl transition-all animate-nav-drop"}>
                        <MdClose className='m-2' size={40} onClick={expand}/>
                        <div className='flex flex-col items-center gap-10'>
                            <div>Newslayers</div>
                            <div className='flex flex-col items-center'>
                                <div className='flex items-center' onClick={()=>{setNoticiasExpanded(!noticiasExpanded)}}>
                                    <div>Notícias</div>
                                    <div style={ClipPath} className="bg-white h-3 w-3 relative rotate-180 transition-all top-1" id='arrow'></div>
                                </div>
                                {
                                    noticiasExpanded
                                    ?
                                    <ul className='animate-nav-drop'>
                                        {
                                            AvailableTopics.map((topic)=>{
                                                return (
                                                    <li className='text-sm font-normal'>{topic}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    :
                                    null
                                }
                            </div>
                            <div>Pesquisar</div>
                            <div>Meu perfil</div>
                            <img src="https://via.placeholder.com/100" alt="" />
                        </div>
                    </div>
                </div>
                :
                null
            }

        </>
    )
}