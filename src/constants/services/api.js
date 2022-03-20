import callApi from "./config";

// User

export const getListUsers = async () => {
  const url = `http://localhost:8001/users`;
  return callApi({
    url,
    method: "GET",
  });
};

export const getUserDetail = async (id) => {
  const url = `http://localhost:8001/users/${id}`;
  return callApi({
    url,
    method: "GET",
    body: JSON.stringify(payload),
  });
};

export const editUserData = async ({ id, payload }) => {
  const url = `http://localhost:8001/users/${id}`;
  return callApi({
    url,
    method: "PUT",
    body: JSON.stringify(payload),
  });
};

export const deleteUserData = async (id) => {
  const url = `http://localhost:8001/users/${id}`;
  return callApi({
    url,
    method: "DELETE",
  });
};

export const createNewUser = async ({ payload }) => {
  const url = `http://localhost:8001/users`;
  return callApi({
    url,
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const LoginUser = async ({ payload }) => {
  const url = `http://localhost:8001/login`;
  return callApi({
    url,
    method: "POST",
    body: JSON.stringify(payload),
  });
};

// Product

export const getProductList = async () => {
  const url = `http://localhost:8001/products`;
  return callApi({
    url,
    method: "GET",
  });
};

export const deleteProductData = async (id) => {
  const url = `http://localhost:8001/products/${id}`;
  return callApi({
    url,
    method: "DELETE",
  });
};

export const editProductData = async ({ id, payload }) => {
  const url = `http://localhost:8001/products/${id}`;
  return callApi({
    url,
    method: "PUT",
    body: JSON.stringify(payload),
  });
};

export const checkProduct = async ({ id, payload }) => {
  const url = `http://localhost:8001/products/${id}`;
  return callApi({
    url,
    method: "PUT",
    body: JSON.stringify(payload),
  });
};

export const publishProduct = async ({ id, payload }) => {
  const url = `http://localhost:8001/products/${id}`;
  return callApi({
    url,
    method: "PUT",
    body: JSON.stringify(payload),
  });
};

export const createNewProduct = async ({ payload }) => {
  const url = `http://localhost:8001/products`;
  return callApi({
    url,
    method: "POST",
    body: JSON.stringify(payload),
  });
};
