import { Container } from '@mui/material';
import TimelineItem from './TimelineItem';
import ChurchIcon from '../assets/icons/church.svg?react';
import WineGlassIcon from '../assets/icons/wine-glass.svg?react';

function Timeline() {
    return (
        <Container disableGutters className="timeline">
            <TimelineItem
                icon={<ChurchIcon width={128} height={128} stroke="#5e3122" />}
                time="13:30 - Príchod hostí pred kostol"
                text="Príchod hostí pred kostol"
            />
            <TimelineItem
                icon={<ChurchIcon width={128} height={128} stroke="#5e3122" />}
                time="14:00 - Sobáš"
                text="Evanjelický kostol Bánovce nad Bebravou"
            />
            <TimelineItem
                icon={<WineGlassIcon width={128} height={128} stroke="#5e3122" />}
                time="15:30 - Hostina, zábava"
                text="Hotel Dávid, Bošany"
            />
        </Container>
    );
}

export default Timeline;
