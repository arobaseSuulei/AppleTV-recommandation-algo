import {useEffect, useState} from "react";
import {createClient} from "@supabase/supabase-js";


const supabase = createClient(
    "https://pxyqknxfvimxdcmplbff.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXFrbnhmdmlteGRjbXBsYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDM4NjIsImV4cCI6MjA0NDg3OTg2Mn0.cuq3c8ejHCSky7BcV1qlj76_QYWcYXYiAbvDolxN6Uk"
);





export default function Recommanded(){



    const [recommanded, setRecommanded] = useState([]);


    useEffect(()=>{
        getRecommanded();
    },[])


    async function getRecommanded() {
        try{
            const {data}=await supabase.from("AppleTV").select("*").neq("image_URL",null).limit(8);
            setRecommanded(data);

        }catch(error){
            console.log("error", error);
        }
    }







    return (
        <div>
            <div className={'grid grid-cols-4 gap-1'}>

                {recommanded.map((reco,index)=>(
                    <div key={index} className={'w-36 h-36 flex flex-col gap-1'}>
                           <span className={'w-full h-36'}>
                               <img className={'rounded-xl object-cover w-full h-full'} src={reco.image_URL}  />
                           </span>

                        <span className={'flex flex-col gap-1'}>
                               <p className={'text-xs'}>{reco.title}</p>
                               <p className={'text-xs'}>
                                   110 min
                               </p>
                           </span>
                    </div>
                ))}

            </div>

        </div>
    );
}