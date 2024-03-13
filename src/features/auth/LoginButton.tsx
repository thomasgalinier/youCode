"use client"

import {Button} from '@/../src/components/ui/button'
import {signIn} from "next-auth/react";
import {useMutation} from "@tanstack/react-query";
import {LogIn} from "lucide-react";
import Loader from "@/components/ui/loader";

export const LoginButton = () => {
    const mutationLogin = useMutation({
        mutationFn: async () => signIn()
    })
    return (
        <Button className="flex gap-2" variant="outline" size="sm" onClick={() => mutationLogin.mutate()}>
            {mutationLogin.isPending ? (
                <Loader size={12}/>
            ) : <LogIn size={12}/>}
            Connexion
        </Button>
    )
}