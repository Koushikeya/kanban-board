const columns = document.querySelectorAll(".column");
let dragableEvent = null;
document.addEventListener("click", (e) => {
  const closestCol = e.target.closest(".column");
  const status = closestCol.dataset.status;
  // const status = closestCol.dataset.status
  console.log(status);

  if (e.target.classList.contains("add-btn")) {
    const text = prompt(`Add task to ${status}`);
    // const task = prompt(`Add task to `)

    const divEle = document.createElement("div");
    divEle.setAttribute("draggable", true);
    divEle.classList.add("task");
    divEle.textContent = text
    
    const delSpan = document.createElement("span")
    delSpan.textContent = "❌"
    delSpan.classList.add("span")

    delSpan.addEventListener("click", () => {
      divEle.remove()
      console.log(delSpan, "Attacked delSpan");
      
    })

    divEle.appendChild(delSpan)
    console.log(`${delSpan} delspan is added`);
    
    console.log(divEle);

    divEle.addEventListener("dblclick", () => {
      const edit = divEle.innerText
      
    })


    const tasksList = closestCol.querySelector(".tasks");
    console.log(tasksList, "exists");

    tasksList.appendChild(divEle);
    console.log(divEle, "exists");
  }
});

document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("task")) {
    dragableEvent = e.target;
    e.target.classList.add("dragging");
    console.log("Dragstarted successfully");
  }
});
document.addEventListener("dragend", (e) => {
  if (e.target.classList.contains("task")) {
    e.target.classList.remove("dragging");
    dragableEvent = null;
    console.log("Dragended successfully");
  }
});

columns.forEach((col) => {
  col.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.target.classList.add(".drag-over");
    console.log("dragover is working");
  });
  col.addEventListener("dragleave", (e) => {
    e.target.classList.remove(".drag-over");
    console.log("dragleave is working");
  });
  col.addEventListener("drop", (e) => {
    if (dragableEvent !== null) {
      col.querySelector(".tasks").appendChild(dragableEvent);
    }
    console.log("drop is working");
  });
});


