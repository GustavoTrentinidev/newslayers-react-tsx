import { useParams } from 'react-router-dom'


export function NewsTemplate(){
    const { id } = useParams()
    
    return (
        <div>Noticia acessada: { id }</div>
    )
}   