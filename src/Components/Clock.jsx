import React, { Component } from 'react'

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.toggleClass = this.toggleClass.bind(this);
        setInterval(() => this.clock.bind(this));
    }

    render() {
        return (
            <div>
                <div className='clock'>
                    <div className="hour">
                        <div className="hr" id="hr"></div>
                    </div>
                    <div className="min">
                        <div className="mn" id="mn"></div>
                    </div>
                    <div className="sec">
                        <div className="sc" id="sc"></div>
                    </div>
                </div>
                <div className="toggleClass" onClick={this.toggleClass}></div>
            </div>
        )
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    // For toggle button;
    toggleClass() {
        const body = document.querySelector('body');
        body.classList.toggle('light');
        body.style.transition = `0.3s linear`;
    }

    clock() {
        // for time;
        const deg = 6;
        // 360 / (12 * 5);

        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#mn');
        const sc = document.querySelector('#sc');


        setInterval(() => {

            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;
            let msec = day.getMilliseconds();


            // VERY IMPORTANT STEP:

            hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;

            // gives the smooth transitioning effect, but there's a bug here!
            // sc.style.transition = `1s`;


        })
    }
}
