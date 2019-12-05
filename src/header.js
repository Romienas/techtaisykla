import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'ok',
            menu: ''
        }

        this.scroll = this.scroll.bind(this);
        this.menu = this.menu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }

    componentDidMount(){
        window.addEventListener('scroll', this.scroll);
    }

    // Manage header view when scrolling down
    scroll = (e) => {
        window.scrollY > 100 ? 
        this.setState({style: 'scrolled'}) :
        this.setState({style: 'ok'});

    }

    menu = () => {
        this.setState({
            menu: <div className={'mobile-menu'} onClick={this.closeMenu}>
                <ul>
                    <li><a href='#paslaugos'>Paslaugos</a></li>
                    <li><a href='#kodel'>Kodėl mes?</a></li>
                    <li><a href='#kontaktai'>Kontaktai</a></li>
                </ul>
                <img onClick={this.closeMenu} src={require('./media/close.svg')} alt='uždaryti' />
            </div>
        })
    }

    closeMenu = () =>{
        this.setState({
            menu: ''
        })
    }

    render() {
        return(
            <div className={this.state.style}>
                {this.state.menu}
                <div className={'container header'}>
                    <span>remonto technologijos</span>
                    <div className={'header__menu'}>
                        <ul>
                            <li><a href='#paslaugos'>Paslaugos</a></li>
                            <li><a href='#kodel'>Kodėl mes?</a></li>
                            <li><a href='#kontaktai'>Kontaktai</a></li>
                        </ul>
                    </div>
                    <div className={'header__burger'} onClick={this.menu}>
                        <img src={require('./media/burger.svg')} alt='meniu ikona' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;