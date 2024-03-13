import {getAuthSession} from "@/lib/auth";
import {LoginButton} from "@/features/auth/LoginButton";
import LoggedInButton from "@/features/auth/LoggedInButton";

export type AuthButtonProps = {

}
const AuthButton = async (props: AuthButtonProps) => {
    const session = await getAuthSession();
    const user = session?.user;

    if(!user) {
        return <LoginButton />
    }
    return  <LoggedInButton user={user} />

};

export default AuthButton;