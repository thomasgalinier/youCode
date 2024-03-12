import {Loader2, LucideProps} from "lucide-react";
import {cn} from "@/lib/utils";

function Loader({className, ...props}: LucideProps) {
    return (
        <Loader2 className={cn("animate-spin", className)} {...props}/>
    );
}
export default Loader;