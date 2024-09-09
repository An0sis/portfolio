import React, {useEffect} from 'react';

function SecondPage() {
    useEffect(() => {

        // Fetch the user's IP address
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const userIP = data.ip;
                const collectIP = functions.httpsCallable('collectIP');
                collectIP({ ip: userIP });
            });

        const yesButton = document.querySelector('.yes-btn');
        const noButton = document.querySelector('.no-btn');
        const btnGroup = document.querySelector('.btn-group');
        const question = document.querySelector(".question");
        const gif = document.querySelector(".gif");

        // Change text and gif when the Yes button is clicked
        yesButton.addEventListener("click", () => {
            btnGroup.style.display = "None";
            question.innerHTML = "You ALWAYS need a hug! </br> Take care of yourself <3";
            gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
        });

// Make the No button move randomly on hover
        noButton.addEventListener("click", () => {
            const wrapper = document.querySelector(".wrapper");
            const wrapperRect = wrapper.getBoundingClientRect();
            const noBtnRect = noButton.getBoundingClientRect();

            // Calculate max positions to ensure the button stays within the wrapper
            const maxX = wrapperRect.width - noBtnRect.width;
            const maxY = wrapperRect.height - noBtnRect.height;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";
        });
    }, []);

    return (<div>
        <div className="wrapper">
            <h2 className="question">Do you need a hug ?</h2>
            <img className="gif" alt="gif"
                 src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJvdWZzYXc1NGJ6aGp1cDE3b2dyNnVzOGN1andkMjVrMmRzeGwwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3OhXBaoR1tVPW/giphy.gif"/>
            <div className="btn-group">
                <button className="yes-btn">Yes</button>
                <button className="no-btn">No</button>
            </div>
        </div>
    </div>);
}

export default SecondPage;