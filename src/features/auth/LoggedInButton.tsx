"use client"

import {Session} from "next-auth";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {signOut} from "next-auth/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {LogOut, User} from "lucide-react";
import Link from "next/link";

export type LoggedInButtonProps = {
    user: Session['user']
}
const LoggedInButton = (props: LoggedInButtonProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>

                <Avatar className="cursor-pointer size-8">
                    <AvatarFallback>
                        {props.user?.name?.[0]}
                    </AvatarFallback>
                    {props?.user?.image &&
                        <AvatarImage src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${props?.user?.name}`}
                                     alt='user picture'/>}
                </Avatar>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href="/account">
                        <User size={12} className="mr-3"/>
                        Account
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut size={12} className="mr-3"/>
                    LogOut
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    );
};


export default LoggedInButton;