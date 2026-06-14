import{createClient} from "@supabase/supabase-js"
import AsyncStorage from '@react-native-async-storage/async-storage';
const supabaseUrl=process.env.EXPO_PUBLIC_SUPABASE_URL
const supabasePublishablekey=process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY
if(!supabaseUrl ||!supabasePublishablekey){
    throw new Error("Supabase Url and Publishable Key are required!")
}
export const supabase =createClient(supabaseUrl,supabasePublishablekey,
    {
     auth:{
       storage:AsyncStorage,
       autoRefreshToken:true,
       persistSession:true,
       detectSessionInUrl:false
    }
    }
    
)
