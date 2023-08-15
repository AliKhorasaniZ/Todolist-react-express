import api from "./axios.api";

export async function fetchGETData(path, token, setData, setError) {
  try {
    const res = await api.get(path, { params: { token } });
    setData(res.data);
  } catch (err) {
    setError && setError(err.response.data);
  }
}

export async function fetchPOSTData(path, payload, setData, setError) {
  try {
    const res = await api.post(path, payload);
    setData(res.data);
  } catch (err) {
    setError && setError(err.response.data);
  }
}

// export function fetchGETData(path, token, setData) {
//   api
//     .get(path, { params: { token } })
//     .then((res) => setData(res.data))
//     .catch((err) => console.log(err));
// }

// export function fetchPOSTData(path, payload, setData) {
//   api
//     .post(path, payload)
//     .then(res => return res.data)
//     .catch((err) => setData(err.response.data));
// }
