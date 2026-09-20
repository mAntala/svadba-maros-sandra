import { Container } from '@mui/material';

function InfoItem({ title, text }: { title: string; text: React.ReactNode }) {
    return (
        <Container component="section" className="info-item">
            <h4>{title}</h4>
            <div dangerouslySetInnerHTML={{ __html: text as string }} />
        </Container>
    );
}

export default InfoItem;