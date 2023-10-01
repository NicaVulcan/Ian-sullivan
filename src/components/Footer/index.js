import sfcmd from '../../assets/images/sfcmd.png';

function Footer() {
    return (
        <footer>
            <div className="footer-inside">
                <div className="footer-text">
                <img alt="starfleet command logo" src={sfcmd} id="sfcmd-logo"/>

                    <p>
                        Copyright &#169; 2023 · Created by <a href="https://www.ccs-morales.com">C.C.S. Morales</a>
                    </p>

                    <p>
                        LCARS Inspired Website Template by <a href="https://www.thelcars.com">www.TheLCARS.com</a>
                    </p>

                </div>
            </div>
            <div className="footer-panel"> <span className="hop">22</span>47 </div>
        </footer>
    )
}

export default Footer;