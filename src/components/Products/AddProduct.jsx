import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { productsContext } from "../../contexts/productsContext";
import ProductsPage from "../../pages/ProductsPage";

export const ProductContext = React.createContext()
export const useProduct = () => {
  return React.useContext(ProductContext)
}
const AddProduct = ({children}) => {
  const { addProduct, getProduct } = React.useContext(productsContext);
  const [product, setProduct] = React.useState({
    image: "",
    model: "",
    complete: "",
    inform: "",
    price: "",
  });

  const INIT_STATE = {
    product: [],
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "PRODUCT":
        return { ...state, product: action.payload };
      default:
        return state;
    }
  };

  React.useEffect(() => {
    getProduct();
  }, []);

  const [state, dispatch] = React.useReducer(reducer, INIT_STATE);
console.log(state)
  const values = {
    product,
  };

  return (
    <Box
      className="admin-inputs"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
        id="filled-basic"
        label="Image"
        variant="filled"
      />
      <TextField
        value={product.model}
        onChange={(e) => setProduct({ ...product, model: e.target.value })}
        id="filled-basic"
        label="Model"
        variant="filled"
      />
      <TextField
        value={product.complete}
        onChange={(e) => setProduct({ ...product, complete: e.target.value })}
        id="filled-basic"
        label="Complete"
        variant="filled"
      />
      <TextField
        value={product.inform}
        onChange={(e) => setProduct({ ...product, inform: e.target.value })}
        id="filled-basic"
        label="Information"
        variant="filled"
      />
      <TextField
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        id="filled-basic"
        label="Price"
        variant="filled"
      />
      <Button onClick={()=> addProduct(product)} variant="contained">Contained</Button>
      <ProductsPage value={values}>{children}</ProductsPage>
    </Box>
  );
}

export default AddProduct;