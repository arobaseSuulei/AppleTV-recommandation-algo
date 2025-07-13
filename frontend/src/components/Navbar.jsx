

export default function Navbar() {
    return (
        <div>
            <div className={'flex flex-col bg-white/10 backdrop-blur-xl border border-white/20   justify-between items-center px-4 w-16 h-72 py-4 rounded-full'}>

                <p  className={'border-[0.2px] border-gray-300/20  flex justify-center items-center rounded-full w-10 h-10'}>

                       <span className={' rounded-full  flex items-center justify-center'}>

                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="size-6 text-white/50">
                           <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"/>
                           <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"/>
                       </svg>

                   </span>

                </p>


                <p  className={'active:border-[0.2px] border-gray-300/20  flex justify-center items-center rounded-full w-10 h-10'}>

                       <span className={' rounded-full  flex items-center justify-center'}>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="size-6 text-white/40">
                           <path fill-rule="evenodd"
                                 d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                                 clip-rule="evenodd"/>
                       </svg>


                   </span>

                </p>


                <p className={'active:border-[0.2px] border-gray-300/20  flex justify-center items-center rounded-full w-10 h-10'}>
                   <span className={' rounded-full  flex items-center justify-center'}>

                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="size-6 text-white/40">
                           <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                           <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
                       </svg>


                   </span>
                </p>


                <p className={'active:border-[0.2px] border-gray-300/20  flex justify-center items-center rounded-full w-10 h-10'}>
                   <span className={' rounded-full  flex items-center justify-center'}>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="size-6 text-white/40">
                           <path
                               d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z"/>
                       </svg>



                   </span>
                </p>

            </div>


        </div>
    );
}