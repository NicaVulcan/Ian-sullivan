import Footer from '../Footer';
import Content from './Content';

function Main(props) {

    //destructure props
    const { currentDisplay } = props;

    return (
        <div class="wrap">
            <div class="scroll-top"><a id="scroll-top" href=""><span class="hop">screen</span> top</a></div>
            <div class="left-frame">
                <div>
                    <div class="panel-3">03<span class="hop">-111968</span></div>
                    <nav id="secondary-nav">
                        <a href="">BUTTON-04</a>
                        <a href="">BUTTON-05</a>
                        <a href="">BUTTON-06</a>
                    </nav>
                    <div class="panel-4">04<span class="hop">-41969</span></div>
                    <div class="panel-5">05<span class="hop">-1701D</span></div>
                    <div class="panel-6">06<span class="hop">-071984</span></div>
                    <div class="panel-7">07<span class="hop">-47148</span></div>
                </div>
                <div>
                    <div class="panel-8">08<span class="hop">-091966</span></div>
                </div>
            </div>
            <div class="right-frame">
                <div class="bar-runner">
                    <div class="bar-6"></div>
                    <div class="bar-7"></div>
                    <div class="bar-8"></div>
                    <div class="bar-9"></div>
                    <div class="bar-10"></div>
                </div>
                <main>
                    <Content
                        currentDisplay={currentDisplay}></Content>
                    <Footer></Footer>
                </main>
            </div>
        </div>
    )
}

export default Main;