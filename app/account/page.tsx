import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {getAuthSession} from "@/lib/auth";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Typography} from "@/components/ui/Typography";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {LogoutButton} from "@/features/auth/LogoutButton";
import {prisma} from "@/lib/prisma";


const AccountPage = async () => {
    const session = await getAuthSession();
    const user = session?.user;
    if (!session) {
        throw new Error("No session found")
    }
    return (
        <Card className="m-auto mt-5 max-w-lg">
            <CardHeader className="flex flex-row items-center gap-5">
                <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${user?.name}`} alt="user image"/>
                </Avatar>
                <div className="flex gap-2 flex-col">
                    <CardTitle>{user?.email}</CardTitle>
                    <CardDescription>{user?.name}</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                <Link href="/account/settings" className={buttonVariants({variant: "outline", size: "lg"})}>Settings</Link>
                <Link href="/admin/courses" className={buttonVariants({variant: "outline", size: "lg"})}>Admin</Link>
            </CardContent>
            <CardFooter className="flex flex-row-reverse">
                <LogoutButton/>
            </CardFooter>
        </Card>

    );
};

export default AccountPage;