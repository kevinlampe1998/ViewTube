const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

const randomColor = () => {
    const randomNum = () =>  Math.round(Math.random() * 255);

    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
};

const Home = () => {

    const playVideo = (event) => {
        event.target.setAttribute("autoplay", "");
        event.target.load();
    };
    
    const setBackVideo = (event) => {
        event.target.removeAttribute("autoplay");
        event.target.pause();
        event.target.currentTime = "0";
    };

    const setVideoNum = () => {
        let randomNums = [];

        while (randomNums.length < 30) {
            let randomNum = Math.round(Math.random() * 29) + 1;

            if (randomNums.includes(randomNum)) continue;
            if (!randomNums.includes(randomNum)) randomNums.push(randomNum);
        }
        randomNums = randomNums.map((num) => num < 10 ? `0${num}` : `${num}`);

        return randomNums;
    }

    return (
        <div className="video-container">
            {
                setVideoNum().map((randomNum, index) => (
                    <div key={index} className="video-item">
                        <video width="400" onMouseEnter={playVideo} onMouseLeave={setBackVideo} preload="metadata" muted loop>
                            <source src={`/videos/video${randomNum}.mp4#t=0.1`} type="video/mp4"></source>
                        </video>
                        <div className="video-description">
                            <div>
                                <h2 style={{ background: randomColor() }}>{letters[Math.round(Math.random() * letters.length)]}</h2>
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dicta.</h3>
                                <img src="/svg/menu-dots-vertical.svg" alt="menu dots" />
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit.</p>
                                <p>100 views - 1 week ago</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Home;
