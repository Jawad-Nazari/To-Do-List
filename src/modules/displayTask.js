const displayTask = (Tasks, Element) => {
  const innerHtml = Tasks.map((Tasks) => `<li class="checkbox-container"><div><input type="checkbox"/><p class="task-details"> ${Tasks.description}</p></div>
    <i class="material-icons dots">more_vert</i>`).join('');

  Element.innerHTML = innerHtml;
};

export default displayTask;