'use strict';

{
  const onClickAdd = () => {
    const inputText = document.getElementById('add-text').value;
    document.getElementById('add-text').value = '';
    createIncompleteList(inputText);
  }

    

  const deleteFromIncompleteList = (target) => {
    document.getElementById('incomplete-list').removeChild(target);
  }

  const createIncompleteList = (text) => {
    const div = document.createElement('div');
    div.classList.add('list-row');
    const li = document.createElement('li');
    li.textContent = text;

    const completeButton = document.createElement('button');
    completeButton.textContent = '完了';
    completeButton.addEventListener('click', () => {
      const deleteTarget = completeButton.parentNode;
      deleteFromIncompleteList(deleteTarget);
      const addTarget = completeButton.parentNode;
      const text = addTarget.firstElementChild.textContent;
      addTarget.textContent = null;
      
      const li = document.createElement('li');
      li.textContent = text;
      
      const backButton = document.createElement('button');
      backButton.textContent = '戻す';
      backButton.addEventListener('click', () => {
        const deleteTarget = backButton.parentNode;
        document.getElementById('complete-list').removeChild(deleteTarget)
        const text = backButton.parentNode.firstElementChild.textContent;

        createIncompleteList(text);
      });
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);
      document.getElementById('complete-list').appendChild(addTarget);
      
    })

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => {
      const deleteTarget = deleteButton.parentNode;
      deleteFromIncompleteList(deleteTarget);
    })

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById('incomplete-list').appendChild(div);
  }
  

  document.getElementById('add-button').addEventListener('click', () => onClickAdd());
}

