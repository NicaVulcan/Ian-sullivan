import formatDate from "../../utils/helpers";

function Header() {
    let currDate = formatDate(new Date().toLocaleString());
    
    return (
        <div class="top-wrapper">
        <div class="top-display">
            <div class="top-display-left">
                <nav id="primary-nav">
                    <a href="">ABOUT</a>
                    <a href="">PROJECTS</a>
                    <a href="">RESUME</a>
                    <a href="">CONTACT</a>
                </nav>
                <div class="chunk"> </div>
                <div class="panel-wrapper">
                    <div class="panel-1">04-557</div>
                </div>
            </div>
            <div class="top-display-right">
                <div class="top-display-content">
                    <div class="top-arch-1">
                        <div class="top-arch-2">
                            <div class="top-arch-content">
                                <div class="lcars-heading">IAN P. SULLIVAN</div>
                                <div class="lcars-access">
                                    MECHANICAL ENGINEER <span class="blink medium-dark-blue"> - ENERGY SPECIALIZATION</span>
                                </div>
                            </div>
                            <div class="top-arch-panel-1">
                            </div>
                            <div class="top-arch-panel-2">
                                {currDate}									
                            </div>
                        </div>
                    </div>							
                </div>
                <div class="arch-bottom">
                    <div class="arch-base"> </div>
                </div>
            </div>
        </div>
        <div class="top-display-bottom">					
            <div class="bar-elbow"></div>
            <div class="bar-1"></div>
            <div class="bar-2"></div>
            <div class="bar-3"></div>
            <div class="bar-4">
                
            </div>
            <div class="bar-5"></div>		
        </div>
    </div>
    )
}

export default Header;