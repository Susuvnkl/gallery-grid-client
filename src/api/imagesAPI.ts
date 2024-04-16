// import axios from "axios";

// // const API_URL = "https://pixabay.com/api/";
// // const API_KEY = "YOUR_API_KEY";

// interface ApiResponse {
//   hits: Image[];
//   total: number;
//   totalHits: number;
// }

// export const fetchImagesByCategory = async (category: string): Promise<Image[]> => {
//   try {
//     const response = await axios.get<ApiResponse>(
//       `http://localhost:5000/api/images/${encodeURIComponent(category)}`
//     );
//     return response.data.hits;
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };
