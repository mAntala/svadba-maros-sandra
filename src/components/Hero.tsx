import { Box } from '@mui/material';

import heroImage from '../assets/header-1.jpg';

function Hero() {
    return (
        <>
            <Box component="header" className="hero">
                <img className="hero__image" src={heroImage} width="100%" />
                <section className="hero__content">
                    <h1>Alexandra & Maroš</h1>
                    <h2>10. októbra 2026, Bošany</h2>
                </section>
            </Box>
        </>
    );
}

export default Hero;
