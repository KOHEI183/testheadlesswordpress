import axios from "axios";

// WordPressのAPIエンドポイントを指定
const API_URL = "http://headlesswordpress.local/wp-json/wp/v2/posts";

// 投稿を取得する関数
export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // 投稿データを返す
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
};
