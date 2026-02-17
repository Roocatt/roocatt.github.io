import React, { type RefObject } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min";

interface BackgroundProps {
}

class Background extends React.Component<BackgroundProps> {
    private vantaEffect: any;
    private readonly vantaRef: RefObject<HTMLInputElement | null>;

    constructor(props: BackgroundProps) {
        super(props);
        this.vantaRef = React.createRef<HTMLInputElement>();
    }

    componentDidMount() {
        this.vantaEffect = RINGS({
            el: this.vantaRef.current,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0xffffff,
            color: 0xd8649c,
        });
    }

    componentWillUnmount() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy();
        }
    }

    render() {
        return (
            <div style={{height: "100vh", width: "100%", position: "fixed", zIndex: 0}} ref={this.vantaRef}></div>
        );
    }
}

export default Background;