import { NewsPage } from "../components/NewsPage";


export function Home(){
    return (
        <div className="h-full min-h-screen md:h-screen w-full p-0 pb-4 m-0 bg-gradient-to-t from-slate-700 to-slate-900">
            <NewsPage/>
        </div>
    )
}