import React from 'react';

class Footer extends React.Component {

    render() {
        return(
            <div className={'footer'}>
                <div className={'container'}>
                    <span>&copy; Visos teisės saugomos. UAB Remonto technologijos</span>
                    <span><a href='https://webrom.lt'>Webrom</a></span>
                </div>
            </div>
        )
    }
}

export default Footer;