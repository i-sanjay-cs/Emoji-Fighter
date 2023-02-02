let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let count = fighters.length

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    let randomEmoji = Math.floor(Math.random() * count)
    let randomEmoji1 = Math.floor(Math.random() * count)
    stageEl.textContent=fighters[randomEmoji]+" vs " + fighters[randomEmoji1]
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})

