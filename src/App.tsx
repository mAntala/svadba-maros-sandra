import { Box, Container } from '@mui/material';

import Hero from './components/Hero';
import Nav from './components/Nav';
import Schedule from './components/Schedule';

function App() {
    return (
        <Box component="main">
            <Container maxWidth="lg" component="section" disableGutters>
                <Hero />
                <Nav />
                <Container component="main" maxWidth={false} disableGutters>
                    <Schedule />
                </Container>
            </Container>
        </Box>
    );
}

export default App;
