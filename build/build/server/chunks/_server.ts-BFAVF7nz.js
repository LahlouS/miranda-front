import { e as error, j as json } from './index2-Dnzf2XsT.js';
import JSONbig from 'json-bigint';

const API_BASE_URL = "http://host.docker.internal:8000";
function convertUserRankingMaterialToStrings(material) {
  return {
    tweet_pos: material.tweet_pos.map(String),
    tweet_neg: material.tweet_neg.map(String),
    description: material.description.map(String)
  };
}
async function fetchUsersData(usersScore, pid) {
  const parser = JSONbig();
  const usersArray = await Promise.all(
    usersScore.map(async (value) => {
      const uid = value.uid;
      const scores = value.scores;
      const usersResponse = await fetch(`${API_BASE_URL}/user/${uid}`);
      if (!usersResponse.ok) {
        throw error(usersResponse.status, `Failed to fetch user data for user id ${uid}`);
      }
      const usersData = await usersResponse.json();
      const usersMaterialResponse = await fetch(`${API_BASE_URL}/engine/${pid}/${uid}`);
      if (!usersMaterialResponse.ok) {
        throw error(usersMaterialResponse.status, `Failed to fetch ranking material for user id ${uid}`);
      }
      const rawMaterialData = await usersMaterialResponse.text();
      const usersMaterialData = await parser.parse(rawMaterialData);
      usersMaterialData.material = convertUserRankingMaterialToStrings(usersMaterialData.material);
      const ret = {
        uid: uid.toString(),
        user_data: usersData,
        scores,
        ranking_material: usersMaterialData.material
      };
      return ret;
    })
  );
  return usersArray;
}
const GET = async ({ url, params }) => {
  const pid = params.pid;
  const userScoresResponse = await fetch(`${API_BASE_URL}/engine/${pid}/userlist`);
  if (!userScoresResponse.ok) {
    throw error(userScoresResponse.status, `Failed to fetch recomended users for ${pid}`);
  }
  const rawScoreResponse = await userScoresResponse.text();
  const usersScore = await JSONbig().parse(rawScoreResponse);
  let users = await fetchUsersData(usersScore, pid);
  return json(users);
};
const POST = async ({ request, params }) => {
  const body = await request.formData();
  const pid = params.pid;
  try {
    const weights = {
      w_occurence: parseFloat(body.get("occurrence")),
      w_pos: parseFloat(body.get("similarity_pos")),
      w_neg: parseFloat(body.get("similarity_neg")),
      w_desc: parseFloat(body.get("similarity_desc")),
      w_followers: parseFloat(body.get("followers_count")),
      w_likes: parseFloat(body.get("likes")),
      w_rt: parseFloat(body.get("rt"))
    };
    if (Object.values(weights).some(isNaN)) {
      throw error(400, "Invalid input: All weight values must be valid numbers.");
    }
    const url = `${API_BASE_URL}/engine/${pid}/computescores?w_pos=${weights.w_pos}&w_neg=${weights.w_neg}&w_desc=${weights.w_desc}&w_followers=${weights.w_followers}&w_likes=${weights.w_likes}&w_rt=${weights.w_rt}&w_occurence=${weights.w_occurence}`;
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      throw error(response.status, `Failed to recompute scores for product with id ${pid}`);
    }
    const responseData = await response.json();
    return json(responseData);
  } catch (err) {
    console.error("Error processing request:", err);
    throw error(500, "Internal Server Error");
  }
};

export { GET, POST };
//# sourceMappingURL=_server.ts-BFAVF7nz.js.map
