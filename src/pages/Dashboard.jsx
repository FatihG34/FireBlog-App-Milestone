import { Box } from '@mui/material';
import { useFetch } from '../helpers/databaseFunctions';
import BlogCard from '../components/blogCard/BlogCard';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

// function LinearColor() {
//     return (
//         <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
//             <LinearProgress color="secondary" />
//             <LinearProgress color="success" />
//             <LinearProgress color="inherit" />
//         </Stack>
//     );
// }
const Dashboard = () => {
    const { isLoading, dataList } = useFetch();
    // console.log(dataList);

    // if (isLoading) {
    //     return <LinearColor />
    // }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mt: 4 }}>
            {dataList?.map((data, index) => (
                <BlogCard data={data} key={index} />
            ))}
        </Box >
    );
}
export default Dashboard