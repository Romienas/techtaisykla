import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div className={'hero'}>
                <div className={'hero__gradient'}>
                        <img 
                            className={'hero__bkg'} 
                            src={require('./media/hero.svg')} 
                            alt='Paveikslėlis su mikroschema' 
                        />
                </div>
                <div className={'container'}>
                    <div className={'hero__text'}>
                        <div className={'hero__text-big'}>
                            Sugedo kompiuterinė technika,  biuro įranga, ar kitas buities įrenginys?
                        </div>
                        <div className={'hero__text-small'}>
                            Mūsų profesionalų komanda Jums padės greitai ir kokybiškai
                        </div>
                        <a className={'hero__button'} href='#kontaktai'>
                            Skambink mums dabar
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;