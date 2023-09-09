const BASE_URL = 'http://localhost:8080/v1/api';


export const getCategories = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const postWish = async (message) => {
  try {
    console.log(message);
    const response = await fetch(
      BASE_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      }
    );
    return { ok: response.ok};
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const deleteMessage = async(id)=>{
  try {
    const response = await fetch(`${BASE_URL}/${id}`,{ method:'DELETE'});
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
}
