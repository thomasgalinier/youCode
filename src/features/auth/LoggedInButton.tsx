"use client"

import {Session} from "next-auth";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {signOut} from "next-auth/react";

export type LoggedInButtonProps = {
    user: Session['user']
}
const LoggedInButton = (props: LoggedInButtonProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="link" size={"sm"}>
                    <Avatar>
                        <AvatarFallback>
                            {props.user?.name?.[0]}
                        </AvatarFallback>
                        {props?.user?.image &&
                            <AvatarImage  src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${props?.user?.name}`}
                                         alt='user picture'/>}
                    </Avatar>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-1/1" >
                <Button variant="link"  size="sm" onClick={() => signOut()} >Déconnexion</Button>
            </PopoverContent>
        </Popover>
    );
};


export default LoggedInButton;