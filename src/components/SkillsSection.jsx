import { Box, Container, Grid, Typography } from "@mui/material";

const skills = [
  { title: "UI/UX Design", desc: "Figma, Adobe XD, Illustrator" },
  { title: "Frontend Dev", desc: "ReactJS, MUI, HTML/CSS, Bootstrap" },
  { title: "Team Tools", desc: "Git, live deployments" },
];

const SkillsSection = () => (
  <Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
    <Container>
      <Typography variant="h4" gutterBottom>
        Skills & Tools
      </Typography>
      <Grid container spacing={4}>
        {skills.map((item, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography color="text.secondary">{item.desc}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default SkillsSection;
