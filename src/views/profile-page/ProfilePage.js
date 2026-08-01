import React from 'react';
import { Grid, Typography } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Profile Page',
  },
];

const ProfilePage = () => {
  return (
    <PageContainer title="Profile Page" description="this is Profile page">
      {/* breadcrumb */}
      {/* <Breadcrumb title="Sample Page" items={BCrumb} /> */}
      {/* end breadcrumb */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DashboardCard title="Tentang Saya">
            <Typography textAlign={'center'}>Saya adalah seorang Front End Web Developer dengan pengalaman kerja 2 tahun di sektor perbankan.saya sangat termotivasi untuk terus mengembangkan kemampuan profesional saya dalam lingkungan tim yang dinamis. Saya berkomitmen untuk memanfaatkan keahlian saya dalam teknologi front-end guna berkontribusi pada proyek-proyek inovatif dan menciptakan pengalaman pengguna yang luar biasa.</Typography>
          </DashboardCard>
        </Grid>
        <Grid item xs={6}>
          <DashboardCard title="Pengalaman Kerja">
            <Typography>This is a Profile page</Typography>
          </DashboardCard>
        </Grid>
        <Grid item xs={6}>
          <DashboardCard title="Pendidikan">
            <Typography>This is a Profile page</Typography>
          </DashboardCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ProfilePage;
