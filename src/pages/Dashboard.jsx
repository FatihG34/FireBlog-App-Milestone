import { Box } from '@mui/material';
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
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mt: 4 }}>
            {dataList?.map((data, index) => (
                <BlogCard data={data} key={index} />
            ))}
        </Box >
    );
}
export default Dashboard