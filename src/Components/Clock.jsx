import React, { Component } from 'react'

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            day: new Date(),
            hh: new Date().getHours * 30,
            mm: new Date().getMinutes() * 6,
            ss: new Date().getSeconds() * 6
        }
        const intervalId = setInterval(() => {
            this.clock();
            this.ticker();
        }, 1000);
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
                <div className='digitalclock'> it is {this.state.day.toLocaleTimeString()}</div>
            </div>
        )
    }

    toggleClass() {
        const body = document.querySelector('body');
        body.classList.toggle('light');
        body.style.transition = `0.3s linear`;
    }

    clock() {
        this.setState({
            day: new Date(),
            hh: new Date().getHours * 30,
            mm: new Date().getMinutes() * 6,
            ss: new Date().getSeconds() * 6
        })
    }

    ticker() {
        const deg = 6;

        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#mn');
        const sc = document.querySelector('#sc');

        hr.style.transform = `rotateZ(${(this.state.hh) + (this.state.mm / 12)}deg)`;
        mn.style.transform = `rotateZ(${this.state.mm}deg)`;
        sc.style.transform = `rotateZ(${this.state.ss}deg)`;
    }
}
