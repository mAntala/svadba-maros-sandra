import Container from '@mui/material/Container';

function TimelineItem({
    icon,
    time,
    text,
}: {
    icon: React.ReactNode;
    time: string;
    text: React.ReactNode;
}) {
    return (
        <Container component="section" className="timeline__item">
            <section className="timeline__icon">{icon}</section>
            <section className="timeline__content">
                <h4>{time}</h4>
                <p>{text}</p>
            </section>
        </Container>
    );
}

export default TimelineItem;
