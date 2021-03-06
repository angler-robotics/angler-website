import React, { useRef } from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image';
import MKBox from '../components/common/MKBox';
import MKButton from '../components/common/MKButton';
import MKTypography from '../components/common/MKTypography';

// Sections
import Sponsors from '../components/screens/sponsors/SponsorsList';
import Mission from '../components/screens/home/Mission';
import Vision from '../components/screens/home/Vision';

// Images
const bgImage = '/images/background/home.png';

function Header() {
  const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop - 32, behavior: 'smooth' });
  const cardRef = useRef();

  return (
    <>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(rgba(gradients.primary.main, 0.3), rgba(gradients.primary.state, 0.7))}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          borderBottom: '2px solid #333;',
        }}
      >
        <Container>
          <Stack direction="row">
            <Grid
              container
              item
              xs={12}
              md={7}
              flexDirection="column"
              justifyContent="center"
              sx={{ py: { xs: 10, sm: 20, md: 0 }, ml: { xs: 2, sm: 5, md: 0 } }}
            >
              <MKTypography
                variant="h1"
                color="white"
                mb={3}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down('md')]: {
                    fontSize: size['3xl'],
                  },
                })}
              >
                Angler Robotics
              </MKTypography>
              <MKTypography variant="body1" color="white" opacity={0.8} mr={6}>
                Diving into the world of AUVs.
              </MKTypography>
              <Stack direction="row" spacing={1} mt={3}>
                <Link href="/join" passHref>
                  <MKButton color="white">Join Us</MKButton>
                </Link>
                <Link href="/team" passHref>
                  <MKButton variant="text" color="white">
                    Meet the Team
                  </MKButton>
                </Link>
              </Stack>
            </Grid>
            <Image width={200} height={200} src="/angler-logo.svg" />
          </Stack>
        </Container>
      </MKBox>
      <MKBox display="flex" justifyContent="center" mt={-32} mb={34} sx={{ pt: { xs: 15, sm: 10, md: 0 } }}>
        <MKTypography
          onClick={() => scrollToRef(cardRef)}
          variant="body2"
          fontWeight="regular"
          color="white"
          sx={{
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              cursor: 'pointer',
              color: ({ palette: { primary } }) => `${primary.main}`,
            },
          }}
        >
          <FontAwesomeIcon icon={['fa', 'chevron-down']} color="inherit" size="3x" />
        </MKTypography>
      </MKBox>
      <Card
        ref={cardRef}
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mb: 8,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Mission />
        <Vision />
        <Sponsors />
        <Grid
          item
          xs={12}
          mt={4}
          mb={8}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Link href="/sponsors" passHref>
            <MKButton size="large" variant="contained" color="primary" circular>
              All Sponsors
            </MKButton>
          </Link>
        </Grid>
      </Card>
    </>
  );
}

export default Header;
