import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';

const styles = {
    head: {
        backgroundColor: '#0F606A',
        color: 'white',
        height: 80
    }
};

class Services extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={'service'}>
                <div className={'container'}>
                    <div id={'paslaugos'}>
                        <h2>Mūsų teikiamos paslaugos</h2>
                    </div>
                    <div className={'service__block'}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary className={clsx(classes.head, 'service__block-name')}>
                                <img src={require('./media/pc-icon.svg')} alt='kompiuterio ikona' />
                                <span><h3>Stacionarių, nešiojamų kompiuterių ir planšečių remontas</h3></span>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={'service__block-list'}>
                                <div>
                                    <ul>
                                        <li>Diagnostika</li>
                                        <li>Skubus remontas</li>
                                        <li>Techninė profilaktika</li>
                                        <li>Termo pastos keitimas</li>
                                        <li>BIOS programavimas</li>
                                        <li>Operacinės sistemos instaliavimas</li>
                                        <li>LCD ir LED ekranų(matricų) keitimas</li>
                                        <li>El. Plokščių remontas ir keitimas</li>
                                        <li>Korpuso jungčių, USB ir  maitinimo jungčių remontas ir keitimas</li>
                                        <li>Baterijų keitimas</li>
                                        <li>El. Komponentų remontas ir  keitimas</li>
                                        <li>Aplietų kompiuterių klaviatūrų remontas ir keitimas</li>
                                        <li>Kompiuterinių šiukšlių valymas (virusai, kenkėjiškos programos )</li>
                                        <li>Vartotojo informacijos išsaugojimas ir atkūrimas</li>
                                        <li>Defektinių aktų išrašymas</li>
                                        <li>Kita</li>
                                    </ul>
                                    <div className={'service__block-new'}>
                                        NAUJIENA<br />
                                        Komplektuojame kompiuterius iš atskirų komponentų <br />
                                        Konsultuojame, įdiegiame ir suderiname programas
                                    </div>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        {/* // */}
                        <ExpansionPanel>
                            <ExpansionPanelSummary className={clsx(classes.head, 'service__block-name')}>
                                <img src={require('./media/tv-icon.svg')} alt='televizoriaus ikona' />
                                <span><h3>Televizorių remontas</h3></span>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={'service__block-list'}>
                                <ul>
                                    <li>Diagnostika</li>
                                    <li>Sisteminių plokščių, apšvietimo sistemų remontas ir  keitimas</li>
                                    <li>El. Komponentų remontas ir keitimas</li>
                                    <li>Atstatome pažeistas jungtis HDMI, SCART, Audio,maitinimo ir kt.</li>
                                    <li>Defektinių aktų išrašymas</li>
                                </ul>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        {/* // */}
                        <ExpansionPanel>
                            <ExpansionPanelSummary className={clsx(classes.head, 'service__block-name')}>
                                <img src={require('./media/cinema-icon.svg')} alt='kino juostos ikona' />
                                <span><h3>Projektorių ir namų kino sistemų remontas</h3></span>
                            </ExpansionPanelSummary>
                        </ExpansionPanel>
                        {/* // */}
                        <ExpansionPanel>
                            <ExpansionPanelSummary className={clsx(classes.head, 'service__block-name')}>
                                <img src={require('./media/printer-icon.svg')} alt='spausdintuvo ikona' />
                                <span><h3>Biuro įrangos remontas</h3></span>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={'service__block-list'}>
                                <ul>
                                    <li>Monitorių remontas</li>
                                    <li>Lazerinių spausdintuvų techninis aptarnavimas, kasečių pildymas ir  remontas</li>
                                    <li>Nepertraukiamo maitinimo šaltinių remontas</li>
                                </ul>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        {/* // */}
                        <ExpansionPanel>
                            <ExpansionPanelSummary className={clsx(classes.head, 'service__block-name')}>
                                <img src={require('./media/coffe-icon.svg')} alt='kavos puodelio ikona' />
                                <span><h3>Buitinės technikos remontas</h3></span>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={'service__block-list'}>
                                <ul>
                                    <li>Kavos aparatų techninis aptarnavimas ir  remontas</li>
                                    <li>Lyginimo ir valymo garais  sistemų techninis aptarnavimas ir  remontas</li>
                                    <li>Virtuvės technikos remontas ir komplektuojamų dalių keitimas</li>
                                    <li>Dulkių siurblių techninis aptarnavimas ir  remontas</li>
                                    <li>Dulkių siurblių robotų techninis aptarnavimas ir remontas</li>
                                    <li>Mikrobangų krosnelių techninis aptarnavimas ir remontas</li>
                                    <li>Defektinių aktų išrašymas</li>
                                </ul>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        {/* // */}
                        <ExpansionPanel>
                            <ExpansionPanelSummary className={clsx(classes.head, 'service__block-name')}>
                                <img src={require('./media/speaker-icon.svg')} alt='garso kolonėlės ikona' />
                                <span><h3>Garso technikos remontas</h3></span>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={'service__block-list'}>
                                <div>
                                    <ul>
                                        <li>Retro garso aparatūros restauravimas</li>
                                        <li>Garso stiprintuvų remontas</li>
                                        <li>Muzikinių centrų remontas</li>
                                        <li>Smulkių prietaisų remontas</li>
                                        <li>Defektinių aktų išrašymas</li>
                                    </ul>
                                    <div className={'service__block-new'}>
                                        NAUJIENA<br />
                                        Restauruotos garso aparatūros pardavimas pagal užsakymus
                                    </div>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        {/* // */}
                        <ExpansionPanel>
                            <ExpansionPanelSummary className={clsx(classes.head, 'service__block-name')}>
                                <img src={require('./media/robot-icon.svg')} alt='roboto ikona' />
                                <span><h3>Robotų ir išmaniųjų žaislų remontas</h3></span>
                            </ExpansionPanelSummary>
                        </ExpansionPanel>
                    </div>
                </div>
            </div>
        )
    }
}

Services.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Services);