import { useEffect } from "react";
import { brazeApiKey, brazeInstance } from "../constants/braze-constants";

const BrazeComponent = () => {
    useEffect(() => {
        import("@braze/web-sdk").then(({ initialize, openSession, changeUser }) => {
            initialize(brazeApiKey, {
                baseUrl: brazeInstance,
                enableLogging: true,
            });
            changeUser("test-12345");
            openSession();
        });
    }, []);
}

export default BrazeComponent;