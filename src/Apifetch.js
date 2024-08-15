import axios from "axios";

// Define the URL for LeetCode GraphQL API
// const leetCodeGraphQLUrl = "https://leetcode.com/graphql";

const leetcode = {
  method: "GET",
  url: "https://leetcode-api.p.rapidapi.com/user/{username}",
  headers: {
    "x-rapidapi-key": "06880c831dmsh3b3eef9068a38bbp1718a5jsndfffd877042a",
    "x-rapidapi-host": "leetcode-api.p.rapidapi.com",
  },
};

// Function to fetch Codeforces data
export const fetchCodeforcesData = async (username) => {
  try {
    const response = await axios.get(
      `https://codeforces.com/api/user.info?handles=${username}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Codeforces data:", error);
    throw error;
  }
};

// Function to fetch CodeChef data
export const fetchCodeChefData = async (username) => {
  try {
    const response = await axios.get(
      `https://competitive-coding-api.herokuapp.com/api/codechef/${username}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching CodeChef data:", error);
    throw error;
  }
};

// Function to fetch LeetCode data
export const fetchLeetCodeData = async (username) => {
    try {
        const response = await axios.request({
            ...leetcode,
            url: leetcode.url.replace("{username}", username),
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching LeetCode data:', error);
        throw error;
    }
}


// Function to fetch LeetCode data using GraphQL
// export const fetchLeetCodeData = async (username) => {
//   try {
//     const query = `
//       {
//         userContestRanking(username: "${username}") {
//           attendedContestsCount
//           rating
//           globalRanking
//           totalParticipants
//           topPercentage
//         }
//         userContestRankingHistory(username: "${username}") {
//           attended
//           trendDirection
//           problemsSolved
//           totalProblems
//           finishTimeInSeconds
//           rating
//           ranking
//           contest {
//             title
//             startTime
//           }
//         }
//       }
//     `;

//     const response = await axios.post(leetCodeGraphQLUrl, {
//       query
//     }, {
//       headers: {
//         "Content-Type": "application/json",
//       }
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching LeetCode data:", error);
//     throw error;
//   }
// };
