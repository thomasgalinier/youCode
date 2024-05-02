'use client'

import {Button} from "@/components/ui/button";
import {Trash} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Typography} from "@/components/ui/Typography";
import {FunctionComponent} from "preact-compat";
interface PropsType {
    course: courseType
}
interface courseType  {
    id: string,
    name:string,
    presentation: string,
    image: string,
    price: number,
    createdAt: string,
    creatorId: string,
}
const ActionCourses: FunctionComponent<PropsType> = ({course}) => {

    return (
        <div className="flex gap-3 justify-end">
            <Button variant={'outline'}>Voir</Button>
            <AlertDialog>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <AlertDialogTrigger >
                                <Button variant={"destructive"} ><Trash size={'14'}/></Button>
                            </AlertDialogTrigger>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Supprimer</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <Typography variant={'h3'}> Etes vous sur de vouloir supprimer {course.name}?</Typography>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Retour</AlertDialogCancel>
                        <AlertDialogAction>Supprimer</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
        ;
};

export default ActionCourses;