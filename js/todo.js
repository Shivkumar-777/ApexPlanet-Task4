let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

function addTask(){
  const t=taskInput.value.trim();
  if(!t) return;
  tasks.push({t,done:false});
  taskInput.value="";
  save();
}
function toggle(i){tasks[i].done=!tasks[i].done;save()}
function del(i){tasks.splice(i,1);save()}
function save(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
  render();
}
function render(){
  list.innerHTML = "";
  let completed = 0;

  tasks.forEach((task, i) => {
    if (task.done) completed++;

    list.innerHTML += `
      <li class="${task.done ? "done" : ""}">
        <span onclick="toggle(${i})">${task.t}</span>
        <button onclick="del(${i})">✖</button>
      </li>
    `;
  });

  const total = tasks.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("progressText").innerText = percent + "% completed";
  document.getElementById("taskCount").innerText =
    `${completed} / ${total}`;
}

