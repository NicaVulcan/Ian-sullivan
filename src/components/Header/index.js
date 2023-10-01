import formatDate from "../../utils/helpers";
import ianAvatar from "../../assets/images/Ian_avatar.png"

function Header(props) {
    let currDate = formatDate(new Date().toLocaleString());

    //destructure props
    const {
        navLinks = [],
        currentDisplay,
        setCurrentDisplay
    } = props;

    return (
        <div className="top-wrapper">
            <div className="top-display">
                <div className="top-display-left">
                    <nav id="primary-nav">
                        {/* create each link */}
                        {navLinks.map((navLink) => (
                                // set current nav link as 'active link' when clicked
                            <div key={navLink} className="nav-link" onClick={() => {setCurrentDisplay(navLink)}}>
                                <span
                                    //active link is highlighted
                                    className={`${currentDisplay === navLink && 'active-link'} nav-link`
                                    }>
                                    {navLink}
                                </span>
                            </div>
                        ))}
                    </nav>
                    <div className="chunk"> </div>
                    <div className="panel-wrapper">
                        <div className="panel-1">04-557</div>
                    </div>
                </div>
                <div className="top-display-right">
                    <div className="top-display-content">
                        <div className="top-arch-1">
                            <div className="top-arch-2">
                                <div className="top-arch-content">
                                    <div className="lcars-heading">IAN P. SULLIVAN</div>
                                    <div className="lcars-access">
                                        MECHANICAL ENGINEER <span className="blink medium-dark-blue"> - ENERGY SPECIALIZATION</span>
                                    </div>
                                    <img alt="cartoon avatar" id="avatar" src={ianAvatar}></img>
                                </div>
                                <div className="top-arch-panel-1">
                                </div>
                                <div className="top-arch-panel-2">
                                    {currDate}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="arch-bottom">
                        <div className="arch-base"> </div>
                    </div>
                </div>
            </div>
            <div className="top-display-bottom">
                <div className="bar-elbow"></div>
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
                <div className="bar-4">

                </div>
                <div className="bar-5"></div>
            </div>
        </div>
    )
}

export default Header;