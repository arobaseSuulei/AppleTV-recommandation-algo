export default function Shows() {
    return (
        <div className={'grid grid-cols-3 gap-4'}>

            <div className={'col-span-3   w-full h-64'}>
                <img className={'w-full rounded-2xl h-full object-cover'} src={'https://www.apple.com/fr/tv-pr/shows-and-films/e/emancipation/images/show-home-graphic-header/key-art-01/4x1/Apple_TV_Emancipation_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1677094540367'}/>

            </div>

            <div className={'col-span-3 '}>
                Next to watch
            </div>

            <div className={'grid grid-cols-1 gap-4 h-36'}>
                <img className={'w-full rounded-2xl h-full object-cover'} src={'https://i.ytimg.com/vi/sf2EzBQiTr8/maxresdefault.jpg'}/>

                <div className={' h-12 flex flex-col gap-2'}>
                    <p className={'text-xl flex justify-between'}>
                        <a>Billie Eilish</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>

                    </p>
                    <p className={'text-xs'}>116 min - MOVIE</p>
                </div>
            </div>

            <div className={'grid grid-cols-1 gap-4'}>

                <img className={'w-full rounded-2xl h-full object-cover'} src={'https://cfm.yidio.com/images/movie/209815/backdrop-640x360.jpg'}/>

                <div className={' h-12 flex flex-col gap-2'}>
                    <p className={'text-xl flex justify-between'}>
                        <a>Billie Eilish</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>

                    </p>
                    <p className={'text-xs'}>116 min - MOVIE</p>
                </div>

            </div>



            <div className={'grid grid-cols-1 gap-4'}>
                <img className={'w-full rounded-2xl h-full object-cover'} src={'https://is1-ssl.mzstatic.com/image/thumb/EUeDAPovZrBtOcrP2Da5Lw/1200x675.jpg'}/>

                <div className={' h-12 flex flex-col gap-2'}>
                    <p className={'text-xl flex justify-between'}>
                        <a>Billie Eilish</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>

                    </p>
                    <p className={'text-xs'}>116 min - MOVIE</p>
                </div>
            </div>




        </div>
    )
}