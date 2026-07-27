async function sendMessage() {

    const topic = document.getElementById("topic").value;
    const explanation = document.getElementById("explanation").value;
    const userMessage = document.getElementById("message").value;

    const previousFeedback = {
        score: 80,
        question: "Can you explain it in simpler words?",
        suggestion: "Try using a real-life example."
    };

    try{
        const response = await fetch("/api/chat", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                topic,
                explanation,
                previousFeedback,
                userMessage
            })
        });

        const data = await response.json();

        document.getElementById("response").innerHTML =
            `<strong>Buddy:</strong><br>${data.response}`;

    }catch(err){
        document.getElementById("response").innerHTML =
            "Error connecting to server.";
    }

}