const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        return all.filter((todo) => !todo.completed && todo.dueDate < today);
      };
    
      const dueToday = () => {
        return all.filter((todo) => todo.dueDate === today);
      };
    
      const dueLater = () => {
        return all.filter((todo) => !todo.completed && todo.dueDate > today);
      };
    
      const toDisplayableList = (list) => {
        let displayableList = '';
        for (const item of list) {
          const checkbox = item.completed ? '[x]' : '[ ]';
          const title = item.title;
          const formattedDueDate = (item.dueDate === today) ? '' : ' ' + item.dueDate;
          displayableList += checkbox + ' ' + title + formattedDueDate + '\n';
        }
        return displayableList;
      };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  }

module.exports =todoList;
  