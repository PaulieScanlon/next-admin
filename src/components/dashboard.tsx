import { List, Datagrid, TextField, useGetList } from 'react-admin';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';

import { Box, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

import { groupByCity } from '../utils/group-by-city';

const Dashboard = () => {
  const { data, isLoading } = useGetList('users', { pagination: { page: 1, perPage: 500 } });

  if (isLoading) return null;

  const chartColors = ['#4CAF50', '#03A9F4', '#3F51B5', '#9C27B0', '#E91E63', '#F44336'];
  const chartData = groupByCity(data)
    .sort((a, b) => b.value - a.value)
    .slice(0, chartColors.length);

  console.log(chartData);

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
      <Grid item lg={8} padding={2} width='100%'>
        <Box padding={4} bgcolor='white' boxShadow={1} borderColor={grey[50]} width='100%' height='100%'>
          <ResponsiveContainer width='100%' height={500}>
            <PieChart>
              <Pie
                data={chartData}
                cx='50%'
                cy='50%'
                innerRadius={60}
                outerRadius={150}
                paddingAngle={3}
                dataKey='value'
              >
                {chartData.map((_, index) => {
                  return <Cell key={index} fill={chartColors[index]} />;
                })}
              </Pie>
              <Legend layout='horizontal' verticalAlign='bottom' align='center' />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
