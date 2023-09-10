import sfcmd from '../../assets/images/sfcmd.png';

function Footer() {
    return (
        <footer>
            <div class="footer-inside">
                <div class="footer-text">
                <img alt="starfleet command logo" src={sfcmd} id="sfcmd-logo"/>

                    <p>
                        Copyright &#169; 2023 <a href="https://www.ccs-morales.com">C.C.S. Morales</a>
                    </p>

                    <p>
                        LCARS Inspired Website Template by <a href="https://www.thelcars.com">www.TheLCARS.com</a>
                    </p>

                </div>
            </div>
            <div class="footer-panel"> <span class="hop">22</span>47 </div>
        </footer>
    )
}

export default Footer;