import { Box, Container, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

const projects = [
  {
    title: "Mobile Banking Redesign",
    desc: "UX case study for mobile banking",
    img: "https://source.unsplash.com/featured/?banking,app"
  },
  {
    title: "Portfolio UI Concept",
    desc: "Clean Figma portfolio design",
    img: "https://source.unsplash.com/featured/?portfolio,ui"
  },
  {
    title: "E-commerce UI Kit",
    desc: "Full UI kit for online store",
    img: "https://source.unsplash.com/featured/?ecommerce,ui"
  }
];

const ProjectsSection = () => (
  <Box id="projects" sx={{ py: 8 }}>
    <Container>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((p, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
            <Card>
              <CardMedia component="img" height="200" image={p.img} alt={p.title} />
              <CardContent>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ProjectsSection;
