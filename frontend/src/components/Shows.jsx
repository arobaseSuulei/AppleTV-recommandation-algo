export default function Shows() {
    return (
        <div className={'grid grid-cols-3 gap-8'}>

            <div className={'col-span-3   w-full h-64'}>
                <img className={'w-full rounded-2xl h-full object-cover'} src={'https://www.apple.com/fr/tv-pr/shows-and-films/e/emancipation/images/show-home-graphic-header/key-art-01/4x1/Apple_TV_Emancipation_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1677094540367'}/>

            </div>

            <div className={'col-span-3 '}>
                Next to watch
            </div>

            <div className={' h-36'}>
                <img className={'w-full rounded-2xl h-full object-cover'} src={'https://i.ytimg.com/vi/sf2EzBQiTr8/maxresdefault.jpg'}/>

            </div>

            <div className={''}>

                <img className={'w-full rounded-2xl h-full object-cover'} src={'https://cfm.yidio.com/images/movie/209815/backdrop-640x360.jpg'}/>

            </div>
            <div className={''}>
                <img className={'w-full rounded-2xl h-full object-cover'} src={'https://is1-ssl.mzstatic.com/image/thumb/EUeDAPovZrBtOcrP2Da5Lw/1200x675.jpg'}/>

            </div>

            <div className={'border h-12'}>
                2
            </div>

            <div className={'border'}>
                3
            </div>
            <div className={'border'}>
                4
            </div>


        </div>
    )
}