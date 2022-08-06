import { Box, Typography } from '@mui/material';
import { useFetch } from '../helpers/databaseFunctions';
import BlogCard from '../components/blogCard/BlogCard';
import Loading from '../assets/loading.gif'

const Dashboard = () => {
    const { isLoading, dataList } = useFetch();
    console.log(dataList);

    if (isLoading) {
        return <img src={Loading} alt="Loading..." />
    }

    return (
        <Box sx={{ textAlign: 'center', fontFamily: 'Girassol, cursive' }} >
            <Typography variant='h3' sx={{ fontFamily: 'Girassol, cursive' }} >-Dashboard-</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mt: 4, textAlign: 'left' }}>
                {dataList?.map((data, index) => (
                    <BlogCard data={data} key={index} />
                ))}
            </Box>
        </Box >
    );
}
export default Dashboard