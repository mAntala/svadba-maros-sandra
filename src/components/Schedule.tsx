import { Container } from '@mui/material';
import Timeline from './Timeline';

function Schedule() {
    return (
        <Container component="section" id="harmonogram" className="schedule bg-light">
            <h3>Harmonogram</h3>
            <Timeline />
        </Container>
    );
}

export default Schedule;
