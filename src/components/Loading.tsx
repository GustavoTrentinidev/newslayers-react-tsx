import gif from '../assets/loading.gif'


export function Loading(){
    return(
        <div className='w-full flex justify-center'>
            <img className="h-20 w-20 m-10" src={gif} alt="" />
        </div>
    )
}