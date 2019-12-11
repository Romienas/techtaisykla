import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { exportAllDeclaration } from '@babel/types';

class Cookie extends React.Component {
    render() {
        return(
            <CookieConsent style={{ background: 'rgba(0,0,0,0.7)' }} buttonText={'Sutinku'}>
                Šioje svetainėje naudojami slapukai (angl. cookies). Sutikdami, paspauskite mygtuką „Sutinku“ arba naršykite toliau. Savo duotą sutikimą bet kada galėsite atšaukti pakeisdami savo interneto naršyklės nustatymus ir ištrindami įrašytus slapukus.
            </CookieConsent>
        );
    }
}

export default Cookie;