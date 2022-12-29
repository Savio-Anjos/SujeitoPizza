import React, { useState, createContext, ReactNode } from 'react';

import { api } from '../services/api';

type AutyConTextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: ( credentials: SignInProps ) => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AutyConTextData);

export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: '',
    })

    const [loadingAuth, setLoadingAuth] = useState(false)

    const isAuthenticated = !!user.name; 

    async function signIn({ email, password }: SignInProps) {
       setLoadingAuth(true)
       

       try {
        const response = await api.post('/session', {
            email,
            password
        })

        //console.log(response.data)

        const { id, name, token } = response.data;

        setUser({
            id,
            name,
            email,
            token,
        })

        setLoadingAuth(false);

       } catch (err) {
        console.log('Erro ao acessar', err)
        setLoadingAuth(true);
       }
       
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
          {children}
        </AuthContext.Provider>
    )
}