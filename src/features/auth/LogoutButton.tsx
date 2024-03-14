"use client"

import {Button} from '@/../src/components/ui/button'
import {signOut} from "next-auth/react";
import {useMutation} from "@tanstack/react-query";
import {LogOut} from "lucide-react";
import Loader from "@/components/ui/loader";

export const LogoutButton = () => {
    const mutationLogin = useMutation({
        mutationFn: async () => signOut()
    })
    return (
        <Button className="flex gap-2" variant="outline" size="sm" onClick={() => mutationLogin.mutate()}>
            {mutationLogin.isPending ? (
                <Loader size={12}/>
            ) : <LogOut size={12}/>}
            Logout
        </Button>
    )
}