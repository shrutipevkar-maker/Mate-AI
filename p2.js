async function submitData() {
  const topic = document.getElementById("topic").value;
  const explanation = document.getElementById("explanation").value;

  const res = await fetch("http://localhost:3000/api/feynman", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ topic, explanation })
  });

  const data = await res.json();

  document.getElementById("result").innerHTML = `
    <p><b>Score:</b> ${data.score}</p>
    <p><b>Strength:</b> ${data.strength}</p>
    <p><b>Suggestion:</b> ${data.suggestion}</p>
    <p><b>Encouragement:</b> ${data.encouragement}</p>
  `;
}