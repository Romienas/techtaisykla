import React from 'react';

class Why extends React.Component {
    render() {
        return(
            <div className={'why'} id={'kodel'}>
                <div className={'why__title'}>
                    <span>Kodėl Remonto Tehnologijos?</span>
                </div>
                <div className={'why__descritpion'}>
                    <div>
                        <h3>Profesionalios technologijos</h3>
                        <p>Darbus atlieka aukštos kvalifikacijos ir ilgametę darbinę patirtį turintys
                            specialistai. Modernūs darbiniai instrumentai leidžia greitai ir tiksliai 
                            atlikti diagnostiką ir sumažinti remonto kaštus. Garantuojame kokybiškas 
                            paslaugas už optimalią kainą.</p>
                    </div>
                    <div>
                        <h3>Vertybės</h3>
                        <p>Pagarba klientui ir darbuotojui, sąžiningumas,atsakomybė, pasitikėjimu 
                            paremtas bendradarbiavimas.<br />
                            Nuolat augame, tobulėjame ir mokomės, esame atviri naujovėms. Ieškome 
                            pranašiausių sprendimų įmonei ir klientams.</p>
                    </div>
                    <div>
                        <h3>Siekis</h3>
                        <p>Būti profesionalia, aukštos kvalifikacijos įmone, kuria pasitiki ir 
                            didžiuojasi įmonės darbuotojai ir visuomenė.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Why;