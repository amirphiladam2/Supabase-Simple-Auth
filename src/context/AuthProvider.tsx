import { supabase } from "@/lib/supabase"
import { createContext, useContext, useEffect, useState } from "react"
import { Session, User } from "@supabase/supabase-js"
interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;

    signUp:(email:string,password:string)=>Promise<void>;
    signIn:(email:string,password:string)=>Promise<void>;
    signOut:()=>Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({children}:{children:React.ReactNode;}) => {

    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const InitializeSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session)
            setUser(session?.user ?? null)
            setLoading(false)
        }

        InitializeSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session)
                setUser(session?.user ?? null)
                setLoading(false)
            }
        );
        return () => {
            subscription.unsubscribe();
        }
    },[])

    const signUp = async (email: string, password: string) => {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) {
            throw error;
        }
    }
    const signIn = async (email: string, password: string) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            throw error;
        }
    }
    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            throw error;
        }
    }
    return(
        <AuthContext.Provider
         value={{user,session,loading,signUp,signIn,signOut}}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext)
     if (!context) {
        throw new Error("useAuth must be within AuthProvider")
    }
    return context;
}