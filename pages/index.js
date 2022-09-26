import { Button, Loader } from "semantic-ui-react";

// the router and states are mostly used in the page for data/information state managements 

import LoginForm from "../comps/LoginForm";

import { useRouter } from "next/router";
import { useState } from "react"

export default function Home() {

    const r = useRouter();

    //before, during, after logging in
    const [loginState, setLoginState] = useState("before");

    // var c = "blue";
    // var btn_text = "click me"

    // if (loginState === "before") {
    //     c = "blue";
    //     btn_text = "Log In"
    // }

    // if (loginState === "during") {
    //     c = "green"
    //     btn_text = "Logging In..."
    // }

    // if (loginState === "after") {
    //     c = "grey"
    //     btn_text = "Success"
    // }

    // const HandleButton = () => {
    //     if (loginState === "before") {
    //         setLoginState("during")
    //     }
    //     if (loginState === "during") {
    //         setLoginState("after")
    //     }
    //     if (loginState === "after") {
    //         r.push("/dashboard");
    //     }
    // }

    const Login = async () => {
        setLoginState("during");

        // it's going to take time to talk to an "endpoint" to see if your user credentials are legit
        // mock of the time passing -> this code is useless, it doesn't do anything 
        await new Promise(resolve => setTimeout(resolve, 2000));
    

        setLoginState("after");
        // it's going to stall for 1-2 seconds

        await new Promise(resolve => setTimeout(resolve, 1000));
        
        r.push("/dashboard");
    }

    return (
        <div>
            {/* <Button color={c} onClick={() => Login()}
            >{btn_text}
                {loginState === "during" && <Loader active />}
            </Button> */}
            <LoginForm
                loginState={loginState}
                onLoginClick={() => Login()} />
        </div>
    )
}
