import { Container } from '@mui/material';
import ChurchIcon from '../assets/icons/church.svg?react';
import WineGlassIcon from '../assets/icons/wine-glass.svg?react';
import BellIcon from '../assets/icons/bell-alt.svg?react';

function Timeline() {
    return (
        <Container disableGutters className="timeline">
            <Container component="section" className="timeline__item">
                <section className="timeline__icon">
                    <ChurchIcon width={128} height={128} stroke="#5e3122" />
                </section>
                <section className="timeline__content">
                    <h4>14:00</h4>
                    <p>Evanjelický kostol Bánovce nad Bebravou</p>
                </section>
            </Container>
            <Container component="section" className="timeline__item">
                <section className="timeline__icon">
                    <WineGlassIcon width={128} height={128} stroke="#5e3122" />
                </section>
                <section className="timeline__content">
                    <h4>16:00</h4>
                    <p>Hotel Dávid, Bošany</p>
                </section>
            </Container>
            <Container component="section" className="timeline__item">
                <section className="timeline__icon">
                    <BellIcon width={128} height={128} stroke="#5e3122" />
                </section>
                <section className="timeline__content">
                    <h4>23:00</h4>
                    <p>Čepčenie alebo čo</p>
                </section>
            </Container>
        </Container>
    );
}

export default Timeline;
