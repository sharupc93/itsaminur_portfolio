import { Box, Button, Container, Typography } from "@mui/material";

const HeroSection = () => (
  <Box sx={{ py: 10, bgcolor: "secondary.light", textAlign: "center" }}>
    <Container>
      <Typography variant="h2" gutterBottom>
        Aminur Rahman Chowdhury
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        UI/UX Engineer & Frontend Developer – turning ideas into elegant digital products
      </Typography>
      <Button variant="contained" href="#projects" size="large">
        View My Work
      </Button>
    </Container>
  </Box>
);

export default HeroSection;
