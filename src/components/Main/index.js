import Footer from '../Footer';
import Content from './Content';

function Main(props) {

    //destructure props
    const { currentDisplay } = props;

    return (
        <div className="wrap">
            <div className="scroll-top"><a id="scroll-top" href=""><span className="hop">screen</span> top</a></div>
            <div className="left-frame">
                <div>
                    <div className="panel-3">03<span className="hop">-111968</span></div>
                    <div className="panel-4">04<span className="hop">-41969</span></div>
                    <div className="panel-5">05<span className="hop">-1701D</span></div>
                    <div className="panel-6">06<span className="hop">-071984</span></div>
                    <div className="panel-7">07<span className="hop">-47148</span></div>
                </div>
                <div>
                    <div className="panel-8">08<span className="hop">-091966</span></div>
                </div>
            </div>
            <div className="right-frame">
                <div className="bar-runner">
                    <div className="bar-6"></div>
                    <div className="bar-7"></div>
                    <div className="bar-8"></div>
                    <div className="bar-9"></div>
                    <div className="bar-10"></div>
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