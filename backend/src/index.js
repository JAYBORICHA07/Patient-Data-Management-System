import dotenv from 'dotenv'
import { app } from './app.js';
import { supabase } from './db/supabase.js';

dotenv.config({
    path : './env'
})

app.listen(process.env.PORT || 8000, async () => {
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    const {data, error} = await supabase.from('users').select()
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})