import { Container } from '@mui/material';
import TimelineItem from './TimelineItem';
import ChurchIcon from '../assets/icons/church.svg?react';
import WineGlassIcon from '../assets/icons/wine-glass.svg?react';
import BellIcon from '../assets/icons/bell-alt.svg?react';

function Timeline() {
    return (
        <Container disableGutters className="timeline">
            <TimelineItem
                icon={<ChurchIcon width={128} height={128} stroke="#5e3122" />}
                time="14:00 - Sobáš"
                text="Evanjelický kostol Bánovce nad Bebravou"
            />
            <TimelineItem
                icon={<WineGlassIcon width={128} height={128} stroke="#5e3122" />}
                time="16:00 - Hostina, zábava (kurvy, chlast & chlebíčky)"
                text="Hotel Dávid, Bošany"
            />
            <TimelineItem
                icon={<BellIcon width={128} height={128} stroke="#5e3122" />}
                time="23:00 - Čepčenie"
                text="Oj bisťu šuhaj a devočka si sadnú spolu a dostanu kroj"
            />
        </Container>
    );
}

export default Timeline;
