import { createClient } from "@supabase/supabase-js";
import {useEffect, useState} from "react";




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
       <div className={'flex items-center gap-2'}>


           1

       </div>
    )
}