import React from 'react';
import {getAuthSession} from "@/lib/auth";
import {Button} from "@/components/ui/button";
import {Typography} from "@/components/ui/Typography";
import {Card, CardContent} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {prisma} from "@/lib/prisma";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import ActionCourses from "@/features/courses/ActionCourses";

const Page = async () => {
    const session = await getAuthSession();
    const user = session?.user;
    if (!session) {
        throw new Error("No session found")
    }
    const courses = await prisma.course.findMany({
        where: {
            creatorId: session.user.id,
        }
    })
    console.log(courses)
    return (
        <div className="m-auto max-w-3xl mt-5">
            <div className="flex justify-between mb-3">
                <Typography variant="h2">Mes cours</Typography>
                <Button variant="outline">Créer un cours</Button>
            </div>
            <Card>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead>Nom</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {courses.map((course) => (
                                <TableRow>
                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage src={`/images/${course.image}`}/>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell>{course.name}</TableCell>
                                    <TableCell className="text-right"><ActionCourses course={course} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;