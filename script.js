const puzzles = {
    nolan: {
      inception: [
        "What is the totem used by Cobb?",
        "Who is the architect in the dream world?",
        "How many dream layers are explored?"
      ],
      interstellar: [
        "What is the name of Cooper's daughter?",
        "Which planet is explored first?",
        "What is the time dilation factor on Miller's planet?"
      ]
    },
    hp: {
      hp1: [
        "Who teaches Potions in Year 1?",
        "What magical object is hidden at Hogwarts?",
        "Name the three-headed dog."
      ],
      hp2: [
        "Who opens the Chamber of Secrets?",
        "What creature is in the Chamber?",
        "Who is Tom Riddle?"
      ]
    }
  };
  
  function showPuzzle(type) {
    const select = document.getElementById(`${type}-select`);
    const value = select.value;
    const container = document.getElementById(`${type}-puzzles`);
    container.innerHTML = "";
  
    if (value && puzzles[type][value]) {
      puzzles[type][value].forEach((question, i) => {
        const p = document.createElement("p");
        p.textContent = `${i + 1}. ${question}`;
        container.appendChild(p);
      });
    }
  }
  