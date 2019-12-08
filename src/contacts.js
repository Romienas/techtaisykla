import React from 'react';

class Contacts extends React.Component {
    render() {
        return(
            <div className={'contacts'} id={'kontaktai'}>
                <div className={'contacts__img'}>
                    <div className={'contacts__cover'}></div>
                    <div className={'container'}>
                        <h2>Kontaktai</h2>
                        <div className={'contacts__list'}>
                            <div className={'contacts__blocks'}>
                                <h3>Adresas</h3>
                                <p>UAB Remonto technologijos <br/>
                                Perkūnkiemio g. 33, Vilnius</p>
                            </div>
                            <div className={'contacts__blocks'}>
                                <h3>Kontaktai</h3>
                                <p>Telefono numeris:<br/>
                                    <a href='tel:+37061454441'>+370 614 54441</a><br/>
                                    <br/>
                                    Elektroninis paštas:<br/>
                                    <a href='mailto:info@techtaisykla.lt'>info@techtaisykla.lt</a></p>
                            </div>
                            <div className={'contacts__blocks'}>
                                <h3>Darbo laikas</h3>
                                <p>I-IV   09:00 iki 18:00<br/>
                                    V   09:00 iki 17:00<br/>
                                    VI-VII   Nedirbame</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts;