import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  { icon: faEnvelope, url: "mailto: hello@example.com" },
  { icon: faGithub, url: "https://github.com" },
  { icon: faLinkedin, url: "https://www.linkedin.com" },
  { icon: faMedium, url: "https://medium.com" },
  { icon: faStackOverflow, url: "https://stackoverflow.com" },
];

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!headerRef.current) return;

    if (currentScrollY > prevScrollY.current) {
      // Scrolling down → hide header
      headerRef.current.style.transform = "translateY(-200px)";
    } else {
      // Scrolling up → show header
      headerRef.current.style.transform = "translateY(0)";
    }

    prevScrollY.current = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="translateY(0)"
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="1000"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Social media icons */}
          <nav>
            <HStack spacing={4}>
              {socials.map(({ icon, url }) => (
                <Link
                  key={url}
                  href={url}
                  isExternal
                  _hover={{ color: "teal.300" }}
                >
                  <FontAwesomeIcon icon={icon} size="lg" />
                </Link>
              ))}
            </HStack>
          </nav>

          {/* Navigation links */}
          <nav>
            <HStack spacing={8}>
              <Link href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </Link>
              <Link
                href="#contactme-section"
                onClick={handleClick("contactme")}
              >
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;