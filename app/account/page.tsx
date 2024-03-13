import React from 'react';
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {getAuthSession} from "@/lib/auth";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Typography} from "@/components/ui/Typography";

const AccountPage = async () => {
    const session = await getAuthSession();
    const user = session?.user;
    return (
        <Card>
            <CardHeader className="flex flex-row items-center gap-5">
                <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${user?.name}`}/>
                </Avatar>
                <div className="flex gap-2 flex-col">
                    <CardTitle>{user?.email}</CardTitle>
                    <CardDescription>{user?.name}</CardDescription>
                </div>
            </CardHeader>
        </Card>
    );
};

export default AccountPage;