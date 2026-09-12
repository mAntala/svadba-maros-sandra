import { Container } from '@mui/material';
import InfoItem from './InfoItem';

function Info() {
    return (
        <Container component="section" id="info-pre-hosti" className="schedule bg-cream">
            <h3>Parkovanie, ubytovanie a ďalšie informácie</h3>
            <section className="info-grid">
                <InfoItem title="Parkovanie - sobáš" text="Informácie o parkovaní." />
                <InfoItem title="Sobáš" text="Informácie o sobáši." />
                <InfoItem title="Hostina" text="Informácie o hostine." />
                <InfoItem title="Dary" text="Ďalšie dôležité informácie pre hostí." />
                <InfoItem title="Ubytovanie" text="Informácie o ubytovaní." />
                <InfoItem title="Parkovanie - ubytovanie" text="Informácie o parkovaní." />
            </section>
        </Container>
    );
}

export default Info;
