import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import {
  fetchCodeChefData,
  fetchCodeforcesData,
  fetchLeetCodeData,
} from "../Apifetch";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChartPage = () => {
  const [username, setUserName] = useState("");
  const [platform, setPlatform] = useState("");
  const [data, setData] = useState(null);

  const handleFetchData = async () => {
    try {
      let response;

      if (platform === "codechef") response = await fetchCodeChefData();
      else if (platform === "codeforces") response = await fetchCodeforcesData(username);
      else if (platform === "leetcode") response = await fetchLeetCodeData();

      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    }
  };

  const generateChartData = (data) => ({
    labels: ["Current Rating", "Global Rank", "Country Rank"],
    datasets: [
      {
        data: [data.currentRating || 0, data.globalRank || 0, data.countryRank || 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div>
      <h1>User Coding Profile</h1>
      <input
        type="text"
        placeholder="UserName"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <select onChange={(e) => setPlatform(e.target.value)}>
        <option value="">Select Platform</option>
        <option value="codechef">CodeChef</option>
        <option value="codeforces">Codeforces</option>
        <option value="leetcode">LeetCode</option>
      </select>
      <button onClick={handleFetchData}>Fetch Data</button>

      <div>
        {platform === 'codechef' && data && (
          <div>
            <h2>CodeChef Profile</h2>
            <img src={data.profile} alt="Profile" width="100" />
            <p>Name: {data.name}</p>
            <p>Current Rating: {data.currentRating}</p>
            <p>Highest Rating: {data.highestRating}</p>
            <p>Country: {data.countryName}</p>
            <img src={data.countryFlag} alt="Country Flag" width="50" />
            <p>Global Rank: {data.globalRank}</p>
            <p>Country Rank: {data.countryRank}</p>
            <p>Stars: {data.stars}</p>
            <Pie data={generateChartData(data)} />
            <h3>Rating History</h3>
            <ul>
              {data.ratingData && data.ratingData.map((rating, index) => (
                <li key={index}>
                  {rating.name} - Rating: {rating.rating} (Rank: {rating.rank})
                </li>
              ))}
            </ul>
          </div>
        )}

        {platform === 'codeforces' && data && (
          <div>
            <h2>Codeforces Profile</h2>
            <img src={data.avatar} alt="Profile" width="100" />
            <p>Handle: {data.handle}</p>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Rank: {data.rank}</p>
            <p>Max Rating: {data.maxRating}</p>
            <p>Registration Time: {new Date(data.registrationTimeSeconds * 1000).toLocaleString()}</p>
            <img src={data.titlePhoto} alt="Title" width="100" />
          </div>
        )}

        {platform === 'leetcode' && data && (
          <div>
            <h2>LeetCode Profile</h2>
            <img src={data.userAvatar} alt="Profile" width="100" />
            <p>Username: {data.username}</p>
            <p>Real Name: {data.realName}</p>
            <p>Country: {data.countryName}</p>
            <p>Company: {data.company}</p>
            <p>Job Title: {data.jobTitle}</p>
            <p>Reputation: {data.reputation}</p>
            <p>Solutions Count: {data.solutionCount}</p>
            <h3>Top Languages</h3>
            <ul>
              {data.languageProblemCount && data.languageProblemCount.map((lang, index) => (
                <li key={index}>
                  {lang.languageName} - Problems Solved: {lang.problemsSolved}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PieChartPage;