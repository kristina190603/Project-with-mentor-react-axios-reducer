import { Box, Grid } from '@mui/material';
import { useProducts } from '../../contexts/productsContext';

const ProductsList = () => {
    const {products,getProduct} = useProducts()

    return (
        <Grid  className='Product field container wrapper'>
            {products.map((item)=>(
                <Box key={item.id}>
                    <ul>
                        <img width="200px"  src={item.image} alt="" />
                        <p>{item.model}</p>
                        <p>{item.complete}</p>
                        <p>{item.inform}</p>
                        <p>{item.price}</p>
                    </ul>
                </Box>
            ))}
        </Grid>
    );
};

export default ProductsList;