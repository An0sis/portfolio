import React, { useEffect } from 'react';
import gifHug from '../../static/mochi-peachcat-mochi.gif';
import gifAsk from '../../static/ask.gif';

function SecretPage() {
    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const userIP = data.ip;
                const currentTime = new Date().toLocaleString();
                const screenResolution = `${window.screen.width}x${window.screen.height}`;
                // Send the data to the Vercel server
                fetch('https://portfolio-anosis-projects.vercel.app/api/data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ip: userIP,
                        time: currentTime,
                        resolution: screenResolution
                    })
                })
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.error('Error:', error));
            });

        const yesButton = document.querySelector('.yes-btn');
        const noButton = document.querySelector('.no-btn');
        const btnGroup = document.querySelector('.btn-group');
        const question = document.querySelector(".question");
        const gif = document.querySelector(".gif");

        // Change text and gif when the Yes button is clicked
        yesButton.addEventListener("click", () => {
            btnGroup.style.display = "none";
            question.innerHTML = "You always need a hug! </br> Take care of yourself ❤️";
            gif.src = gifHug;
        });

        // Make the No button move randomly on click
        noButton.addEventListener("click", () => {
            const wrapper = document.querySelector(".wrapper");
            const wrapperRect = wrapper.getBoundingClientRect();
            const noBtnRect = noButton.getBoundingClientRect();

            // Calculate max positions to ensure the button stays within the wrapper
            const maxX = wrapperRect.width - noBtnRect.width;
            const maxY = wrapperRect.height - noBtnRect.height;

            // Ensure the button stays within the wrapper
            const randomX = Math.max(0, Math.min(Math.floor(Math.random() * maxX), maxX));
            const randomY = Math.max(0, Math.min(Math.floor(Math.random() * maxY), maxY));

            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";
        });
    }, []);

    return (
        <body className="w-screen h-screen bg-[f2f2f2] flex items-center justify-center">
        <div className="wrapper relative w-full max-w-md text-center mx-auto">
            <h2 className="question text-4xl font-extrabold text-[#A62E5A] my-4 py-5">Do you need a hug ?</h2>
            <img className="gif w-full max-w-xs mx-auto" alt="gif" src={gifAsk} />
            <div className="btn-group mt-12 relative h-10">
                <button className="yes-btn w-36 h-full text-white text-lg rounded-full outline-none cursor-pointer shadow-md border-2 border-[#A62E5A] bg-[#A62E5A]">Yes</button>
                <button className="no-btn w-36 h-full text-[#A62E5A] text-lg rounded-full outline-none cursor-pointer shadow-md border-2 border-[#A62E5A] bg-white absolute left-1/2 transform -translate-x-1/2">No</button>
            </div>
        </div>
        </body>
    );
}

export default SecretPage;