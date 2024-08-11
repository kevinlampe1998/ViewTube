const LoremSentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit Unde officiis perspiciatis repellendus nobis doloribus eius ab nihil assumenda explicabo sit iusto nulla cum magnam voluptate soluta enim qui eos culpa";

const SecondaryNav = () => {

    return (
        <nav className="secondary-nav">
            <span><img src="/svg/angle-left-2.svg" alt="secondary navigation left arrow" /></span>
            <section>
                <div className="secondary-nav-bg"></div>
                { LoremSentence.split(" ").map((title, index) => (
                    <h4 key={index}>{title}</h4>
                )) }
            </section>
            <span><img src="/svg/angle-right-2.svg" alt="secondary navigation right arrow" /></span>
        </nav>
    );
}

export default SecondaryNav;
