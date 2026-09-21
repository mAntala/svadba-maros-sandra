import { Container } from '@mui/material';
import InfoItem from './InfoItem';

import hotelImage from '../assets/mapa-hotel-david.jpg';
import kostolImage from '../assets/mapa-kostol.jpg';

function Info() {
    return (
        <Container component="section" id="info-pre-hosti" className="schedule bg-cream">
            <h3>Parkovanie, ubytovanie a ďalšie informácie</h3>
            <section className="info-grid">
                <InfoItem
                    title="Parkovanie - sobáš"
                    text={`
                    <p>Parkovanie je možné pred kostolom, na pozdĺžnych parkovacích miestach.</p>
                    <p>Taktiež je možné parkovať neďaleko na parkovisku za kostolom - cca 3 minúty chôdze. <a href='https://maps.app.goo.gl/dA6n67fwiZySdsTb6' target='_blank'>[Klik pre trasu]</a></p>
                    <p><b>Neodporúčam parkovať vo vnútornom dvore oproti kostolu, je to súkromný pozemok.</b></p>
                    <p><b>Neďaleko kostola je aj Hotel Arkádia. Počas víkendu síce parkovisko je zdarma, no nemalo by sa tam parkovať okrem hostí hotela.</b></p>
                    <img src='${kostolImage}' width='960' height='496' alt='Mapa kostola' loading='lazy' />
                    `}
                />
                <InfoItem
                    title="Hostina"
                    text={`
                <p>Hostina sa koná v Hoteli Dávid, Bošany <a href='https://maps.app.goo.gl/UxvMAFy1xL9EeYqU7' target='_blank'>[Klik pre trasu]</a></p>
                <p><b>Prosíme hostí, aby primárne parkovali na parkovisku pozdĺž cesty pred hotelom, až v krajnom prípade využili parkovanie v priestoroch hotela.</b></p>
                <img src='${hotelImage}' width='960' height='496' alt='Mapa hotela Dávid' loading='lazy' />
                `}
                />
                <InfoItem
                    title="Ubytovanie"
                    text="<p>Hostia, ktorí majú zabezpečené ubytovanie v hoteli, sa budú môcť ubytovať kedykoľvek počas hostiny, stačí sa opýtať čašníkov.</p><p>Ubytovaní hostia majú zabezpečené raňajky.</p>"
                />
            </section>
        </Container>
    );
}

export default Info;
