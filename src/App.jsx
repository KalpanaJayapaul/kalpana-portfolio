import React, { useEffect, useState } from "react";
import {
  AppBar, Toolbar, Typography, Button, Box, Container, Grid, Card,
  CardMedia, CardContent, TextField, Stack, Link as MuiLink, IconButton
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import PsychologyIcon from "@mui/icons-material/Psychology";

const skills = [
  {
    title: "Frontend Development",
    icon: <CodeIcon />,
    items: [
      ["Languages", "HTML5, CSS3, JavaScript (ES6+)"],
      ["Frameworks", "React.js, Vue.js"],
      ["Styling", "Tailwind CSS, MUI, SCSS"],
      ["Tools", "Vite, Git"],
    ],
  },
  {
    title: "Backend Development",
    icon: <StorageIcon />,
    items: [
      ["Languages", "Python, JavaScript (Node.js)"],
      ["Databases", "MongoDB, PostgreSQL, MySQL"],
      ["API", "RESTful APIs"],
      ["Tools", "Postman, PyCharm, Git"],
    ],
  },
  {
    title: "UI / UX Design",
    icon: <BrushIcon />,
    items: [
      ["Design Tools", "Figma, Canva"],
      ["Skills", "Wireframing, Visual Design"],
    ],
  },
  {
    title: "AI Technologies",
    icon: <PsychologyIcon />,
    items: [
      ["Focus", "AI-powered applications"],
      ["Interests", "Generative AI, intelligent assistants"],
    ],
  },
];

const projects = [
  {
    title: "Weather App",
    description: "Real-time weather app using OpenWeatherMap API and React.",
    image: "/project1.jpg",
    href: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animated sections and contact form.",
    image: "/project2.jpg",
    href: "#",
  },
];

const roles = ["AI Full-Stack Developer"];

export default function App() {
  const [role, setRole] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex += 1;
        setRole(current.slice(0, charIndex));
        if (charIndex >= current.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
        timer = setTimeout(tick, 100);
      } else {
        charIndex -= 1;
        setRole(current.slice(0, charIndex));
        if (charIndex <= 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timer = setTimeout(tick, 450);
          return;
        }
        timer = setTimeout(tick, 45);
      }
    };
    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, []);

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1&to=j.kalpana.jks@gmail.com&su=${subject}&body=${body}`;

  window.open(gmailUrl, "_blank", "noopener,noreferrer");

  form.reset();
};

  const navItems = ["Home", "Skills", "Projects", "Contact"];

  return (
    <Box component="main">
      <AppBar position="fixed" elevation={0} className="portfolio-navbar">
        <Toolbar className="portfolio-toolbar">
          <Typography component="a" href="#home" className="portfolio-logo">Kalpana</Typography>
          <Button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "Close" : "Menu"}
          </Button>
          <Stack direction="row" spacing={3} className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            {navItems.map((item) => (
              <MuiLink key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} underline="none" className="nav-link">
                {item}
              </MuiLink>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Box component="section" id="home" className="hero">
        <Container maxWidth="xl" className="hero-inner">
          <Box className="hero-content">
            <Typography component="h1" className="hero-title">
              {role}<span className="cursor">|</span>
            </Typography>
            <Typography component="p" className="hero-description">
              Turning ideas into intelligent, scalable, and AI-driven digital solutions.
            </Typography>

            <Typography component="p" className="hero-highlight">
              Full-Stack Development | LLM Integration | REST APIs
            </Typography>
            <Button component="a" href="#contact" variant="contained" className="cta-button">
              Let's Connect
            </Button>
          </Box>
          <Box className="hero-image">
            <Box component="img" src="/profile.jpg.jpg" alt="Kalpana profile" className="profile-img"
              onError={(e) => { e.currentTarget.style.display = "none"; }} />
            <Box className="profile-fallback">K</Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="skills" className="skills section">
        <Container maxWidth="xl">
          <Typography component="h2" className="section-title">Technical Expertise</Typography>
          <Typography component="p" className="section-intro">
            I bring a well-rounded skill set that bridges design and development, allowing me to build robust, user-centric digital experiences.
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {skills.map((skill) => (
              <Grid item xs={12} sm={6} lg={3} key={skill.title}>
                <Card className="skill-card reveal">
                  <Box className="skill-icon">{skill.icon}</Box>
                  <Typography component="h3" className="card-title">{skill.title}</Typography>
                  <Box component="ul" className="skill-list">
                    {skill.items.map(([label, value]) => (
                      <li key={label}><strong>{label}:</strong> {value}</li>
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="projects" className="projects section">
        <Container maxWidth="xl">
          <Typography component="h2" className="section-title">Featured Projects</Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} key={project.title}>
                <Card className="project-card reveal">
                  <CardMedia component="img" image={project.image} alt={project.title}
                    onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  <CardContent className="project-info">
                    <Typography component="h3" className="card-title">{project.title}</Typography>
                    <Typography component="p">{project.description}</Typography>
                    <MuiLink href={project.href} underline="none" className="project-link">View Project</MuiLink>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="contact" className="contact section">
        <Container maxWidth="md">
          <Typography component="h2" className="section-title">Contact Me</Typography>
          <Box component="form" className="contact-form" onSubmit={handleSubmit}>
            <TextField name="name" placeholder="Your Name" required fullWidth />
            <TextField name="email" type="email" placeholder="Your Email" required fullWidth />
            <TextField name="message" placeholder="Your Message" required fullWidth multiline minRows={5} />
            <Button type="submit" variant="contained" className="send-button">Send Message</Button>
          </Box>
        </Container>
      </Box>

      <Box component="footer" className="footer">
        <Typography component="p">© {new Date().getFullYear()} Kalpana. All rights reserved.</Typography>
        <Stack direction="row" spacing={2} justifyContent="center" className="social-links">
          <IconButton component="a" href="https://github.com/KalpanaJayapaul" aria-label="GitHub"><GitHubIcon /></IconButton>
          <IconButton component="a" href="#" aria-label="Instagram"><InstagramIcon /></IconButton>
          <IconButton component="a" href="#" aria-label="WhatsApp"><WhatsAppIcon /></IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/kalpana-j-1370912bb" aria-label="LinkedIn"><LinkedInIcon /></IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
