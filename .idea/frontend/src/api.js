const BASE_URL_CATEGORIES = 'http://localhost:8080/categories';
const BASE_URL_PRODUCT = 'http://localhost:8080/product';
const BASE_URL_WISH = 'http://localhost:8080/wish';
const BASE_URL_REQUEST = 'http://localhost:8080/request';
const BASE_URL_PHOTOS = 'http://localhost:8080/photos';
const BASE_URL_LANG = 'http://localhost:8080/lang';

export const getCategories = async () => {
  try {
    const response = await fetch(BASE_URL_CATEGORIES);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getProductsByCategory= async (id)=>{
  try {
    const response = await fetch(`${BASE_URL_CATEGORIES}/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
}

export const getProduct= async(id)=>{
  try {
    const response = await fetch(`${BASE_URL_PRODUCT}/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
}

export const getPhotos= async(id)=>{
  try {
    const response = await fetch(`${BASE_URL_PHOTOS}/${id}`);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
}

export const getProductList = async () => {
  try {
    const response = await fetch(BASE_URL_PRODUCT);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const postWish = async (wish) => {
  try {
    console.log(wish);
    const response = await fetch(
      BASE_URL_WISH,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(wish),
      }
    );
    return { ok: response.ok};
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const sendRequest = async (request, id) => {
  try {
    console.log(request);
    const response = await fetch(
      `${BASE_URL_PRODUCT}/request/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      }
    );
    console.log(response);
    return { ok: response.ok};
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getWishes = async () => {
  try {
    const response = await fetch(BASE_URL_WISH);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const deleteWish = async(id)=>{
  try {
    const response = await fetch(`${BASE_URL_WISH}/${id}`,{ method:'DELETE'});
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
}

export const getRequests = async () => {
  try {
    const response = await fetch(BASE_URL_REQUEST);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const deleteRequest = async(id)=>{
  try {
    const response = await fetch(`${BASE_URL_REQUEST}/${id}`,{ method:'DELETE'});
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
}

export const deleteProduct = async(id)=>{
  try {
    const response = await fetch(`${BASE_URL_PRODUCT}/${id}`,{ method:'DELETE'});
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
}

export const putProduct = async(product)=>{
  console.log(product);
  try {
    const response = await fetch(
      `${BASE_URL_PRODUCT}/edit/${product.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }
    );
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
}
