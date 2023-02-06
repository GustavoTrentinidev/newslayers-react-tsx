import { MdSearch } from 'react-icons/md';


export function Header(){
    function toggleArrowAndDropdown(){
        toggleArrow()
        toggleDropdown()
    }
    
    function toggleDropdown(){
        const dropdown = document.getElementById('dropdown')
        dropdown!.style.display == 'flex' ? dropdown!.style.display = 'none' : dropdown!.style.display = 'flex'
    }
    
    function toggleArrow(){
        const arrow = document.getElementById('arrow')
        let arrowClasses = arrow!.classList
        if(arrowClasses.contains('rotate-180')){
            removeAndAddArrowClasses(arrowClasses, 'rotate-180', '-top-2.5')
        }else{
            removeAndAddArrowClasses(arrowClasses, '-top-2.5', 'rotate-180')
        }
    }

    function removeAndAddArrowClasses(classes: DOMTokenList, remove: string, add: string){
        classes.remove(remove)
        classes.add(add)
    }

    const AvailableTopics = ['LOL', 'VALORANT', 'TFT', 'Wild Rift', 'Runeterra']
    

    return(
        <div className="h-14 bg-slate-900 w-full text-white flex items-center p-2 justify-between" id="show">
            <div className="flex">
                <div className="flex font-kadwa font-semibold text-2xl gap-6">
                    <div className="cursor-pointer">Newslayers</div>
                    <div className="cursor-pointer" onClick={toggleArrowAndDropdown}>Notícias</div>
                </div>
                <div className="relative flex gap-10">
                    <ul id="dropdown" className="absolute -left-24 top-6 hidden font-kadwa bg-slate-900 gap-2 rounded p-2 flex-col">
                        {
                            AvailableTopics.map((topic)=>{
                                return <li className="cursor-pointer">{topic}</li>
                            })
                        }
                    </ul>
                    <div className="relative ml-1">
                        <div style={ClipPath} onClick={toggleArrowAndDropdown} className="bg-white h-3 w-3 absolute rotate-180 transition-all top-3" id='arrow'></div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <input 
                        type="text"
                        placeholder="Pesquisar" 
                        className="outline-none border-b-2 border-cyan-400 ml-8 text-white bg-slate-900 w-24 focus:w-56 transition-all duration-500" 
                    />
                    <MdSearch size={25}/>
                </div>
            </div>
            <div className='font-kadwa font-semibold text-2xl'>Meu perfil</div>
        </div>
    )
}

const ClipPath = {
    backgroundColor: 'white',
    clipPath: 'polygon(50% 50%, 0% 100%, 100% 100%)'
}