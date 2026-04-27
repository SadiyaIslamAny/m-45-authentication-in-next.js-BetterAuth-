import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


const DashBoardPage = async () => {
    const session = await auth.api.getSession({
       headers: await headers()
    })

    console.log('session data in dashboard', session)

    const user = session?.user;
    if(!user){
        redirect('/auth/signin')
        return <div>please sign in to access the dashboard.</div>
    }
    return (
        <div>
            <h2>dashboard page</h2>
        </div>
    );
};

export default DashBoardPage;