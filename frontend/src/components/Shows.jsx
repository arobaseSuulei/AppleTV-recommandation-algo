import { createClient } from "@supabase/supabase-js";
import {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const supabase = createClient(
    "https://pxyqknxfvimxdcmplbff.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk"
);







export default function Shows() {



    const [shows, setShows] = useState([]);

    useEffect(() => {
        getShows();
    },[])


    async function getShows() {
        try{
            const {data}=await supabase.from("AppleTV").select("*").neq("image_URL",null);
            setShows(data);

        }catch(error){
            console.log("error", error);
        }
    }

    console.log(shows);

    return (
       <div className={''}>
           <div className={'w-full border-b border-b mb-2 pb-2'}>
               <Swiper
                   modules={[Navigation, Pagination]}
                   spaceBetween={16}
                   slidesPerView={3}
                   navigation
                   pagination={{ clickable: true }}
                   loop={true}
                   className={'w-full h-64'}
               >
                   {shows.map((show, index) => (
                       <SwiperSlide key={index}>
                           <div className={'w-full h-56 flex flex-col gap-1'}>
                           <span className={'w-full h-36'}>
                               <img className={'rounded-xl object-cover w-full h-full'} src={show.image_URL || 'https://is1-ssl.mzstatic.com/image/thumb/RcgPZ5VHFSmr43fk1fjuMw/1200x675.jpg'} alt={show.title} />
                           </span>

                               <span className={'flex flex-col gap-1'}>
                               <p>{show.title}</p>
                               <p className={'text-xs'}>
                                   {show.type} - {show.runtime} min
                               </p>
                           </span>
                           </div>
                       </SwiperSlide>
                   ))}
               </Swiper>
           </div>


           <p>Similaires</p>
       </div>
    )
}