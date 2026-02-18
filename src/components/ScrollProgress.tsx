import { useEffect, useRef, useState } from "react";

const useScrollPercentage = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const el = document.documentElement;
        const ScrollTop = el.scrollTop || document.body.scrollTop;
        const ScrollHeight = el.scrollHeight || document.body.scrollHeight;
        const percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
        setScrollPercentage(percent);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollPercentage;
};

export const ScrollTopAnchor = () => {
    return (<>
        <a id="scroll-top-anchor"/>
    </>)
}

const ScrollProgress = () => {
    const elementRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        const anchor = (document).querySelector('#scroll-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (<>
        <div className={'progress-indicator-container'}>
            <div ref={elementRef} className="progress-indicator">
                <span className="progress-indicator-bar"
                      style={{width: Math.round(Math.round(useScrollPercentage()) / 5) * 5 + '%'}}/>
            </div>
            <button className={'progress-indicator-scroll-button'}
                    disabled={useScrollPercentage() < 10}
                    onClick={handleClick}>
                Scroll Up
            </button>
        </div>
    </>)
}

export default ScrollProgress;