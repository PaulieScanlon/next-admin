import { List, Datagrid, TextField } from 'react-admin';

import { Box, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

const Dashboard = () => {
  return (
    <Grid container padding={{ lg: 4 }} columns={16}>
      <Grid item lg={8} padding={2} width='100%'>
        <Box padding={4} bgcolor='white' boxShadow={1} borderColor={grey[50]} width='100%' height='100%'>
          <List>
            <Datagrid>
              <TextField source='first_name' />
              <TextField source='last_name' />
              <TextField source='city' />
              <TextField source='county' />
            </Datagrid>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
