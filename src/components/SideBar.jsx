import { Link } from "react-router-dom";

const SideBar = ({sideBar}) => {
    
    const closeSideBar = () => {
        sideBar.current.style.left = "-250px";
    };

    return (
        <div>
            <section className="sidebar-header" onClick={closeSideBar}>
                
                <div className="menu-icon">
                    <img src="/svg/menu.svg" alt="menu burger icon" />
                </div>

                <Link to="/" className="logo logo2">
                    <img src="/svg/caret-left.svg" alt="youtube icon but the arrow it to the left" />
                </Link>

                <div className="view-tube view-tube-2">
                  <h1>ViewTube</h1>
                  <div>DE</div>
                </div>

            </section>     
            <section>
                <div>
                    <img src="/svg/sidebar/top/house-chimney-window.svg" alt="sidebar home" />    
                    <h4>Home</h4>
                </div>
                <div>
                    <img src="/svg/sidebar/top/cards-blank.svg" alt="sidebar shorts" />    
                    <h4>Shorts</h4>
                </div>
                <div>
                    <img src="/svg/sidebar/top/smile-plus.svg" alt="sidebar subscriptions" />    
                    <h4>Subscriptions</h4>
                </div>
            </section>       
            <section>
                <h2>You</h2>
                <div>
                    <img src="/svg/sidebar/you/time-past.svg" alt="sidebar your history" />    
                    <h4>History</h4>
                </div>
                <div>
                    <img src="/svg/sidebar/you/folder-music.svg" alt="sidebar your playlist" />    
                    <h4>Playlists</h4>
                </div>
                <div>
                    <img src="/svg/sidebar/you/clock-five.svg" alt="sidebar watch later" />    
                    <h4>Watch later</h4>
                </div>
                <div>
                    <img src="/svg/sidebar/you/social-network.svg" alt="sidebar liked videos" />    
                    <h4>Liked Videos</h4>
                </div>
            </section>       
            <section>
                <h2>Explore</h2>
                <div>
                    <img src="/svg/sidebar/explore/flame.svg" alt="sidebar explore trending" />    
                    <h4>Trending</h4>
                </div> 
                <div>
                    <img src="/svg/sidebar/explore/music-note.svg" alt="sidebar explore music" />    
                    <h4>Music</h4>
                </div> 
                <div>
                    <img src="/svg/sidebar/explore/film.svg" alt="sidebar explore movies and television" />    
                    <h4>Movies & TV</h4>
                </div> 
                <div>
                    <img src="/svg/sidebar/explore/signal-stream.svg" alt="sidebar explore live" />    
                    <h4>Live</h4>
                </div> 
                <div>
                    <img src="/svg/sidebar/explore/gamepad.svg" alt="sidebar explore gaming" />    
                    <h4>Gaming</h4>
                </div> 
                <div>
                    <img src="/svg/sidebar/explore/newspaper.svg" alt="sidebar explore news" />    
                    <h4>News</h4>
                </div> 
                <div>
                    <img src="/svg/sidebar/explore/trophy.svg" alt="sidebar explore sports" />    
                    <h4>Sports</h4>
                </div> 
                <div>
                    <img src="/svg/sidebar/explore/lightbulb-on.svg" alt="sidebar explore learning" />    
                    <h4>Learning</h4>
                </div>
                <div>
                    <img src="/svg/sidebar/explore/podcast.svg" alt="sidebar explore podcasts" />    
                    <h4>Podcasts</h4>
                </div>
            </section>       
            <section>
                <h2>More from ViewTube</h2>
                <div>
                    <img src="/svg/sidebar/more/play-alt.svg" alt="sidebar view tube premium" />    
                    <h4>ViewTube Premium</h4>
                </div>
                <div>
                    <img src="/svg/sidebar/more/play-circle.svg" alt="sidebar view tube music" />    
                    <h4>ViewTube Music</h4>
                </div>
                <div>
                    <img src="/svg/sidebar/more/baby.svg" alt="sidebar view tube kids" />    
                    <h4>ViewTube Kids</h4>
                </div>
            </section>       
            <section>
                <div>
                    <img src="/svg/sidebar/bottom/settings.svg" alt="sidebar settings" />    
                    <h4>Settings</h4>
                </div>
                <div>
                    <img src="/svg/sidebar/bottom/flag-alt.svg" alt="sidebar report history" />    
                    <h4>Report history</h4>
                </div>
                <div>
                    <img src="/svg/sidebar/bottom/interrogation.svg" alt="sidebar help" />    
                    <h4>Help</h4>
                </div>  
                <div>
                    <img src="/svg/sidebar/bottom/square-exclamation.svg" alt="sidebar send feedback" />    
                    <h4>Send Feedback</h4>
                </div>
            </section>
            <section className="sidebar-sub-footer">
                <div>
                    <h6>About</h6>
                    <h6>Press</h6>
                    <h6>Copyright</h6>
                    <h6>Contact us</h6>
                    <h6>Creators</h6>
                    <h6>Advertise</h6>
                    <h6>Developers</h6>
                    <h6>Impressum</h6>
                    <h6>Cancel</h6>
                    <h6>Memberships</h6>
                </div>
                <div>
                    <h6>Terms</h6>
                    <h6>Privacy</h6>
                    <h6>Policy & Safety</h6>
                    <h6>How ViewTube works</h6>
                    <h6>Test new features</h6>
                </div>
            </section>
            <section className="copyright">
                <div>
                    <img src="/svg/sidebar/copyright/copyright.svg" alt="sidebar " />    
                    <h4>2024 Cube LLC</h4>
                </div>
            </section>
        </div>
    );
}

export default SideBar;
