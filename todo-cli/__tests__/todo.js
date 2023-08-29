const todoList = require('../todo');

const {all, markAsComplete, add, overdue, dueToday, dueLater} = todoList();

describe("Todolist Test Suite", () => {
    test("Should add new todo", () => {
        const todoItemsCount = all.length;
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: "2023-09-20"
            }
        );
        expect(all.length).toBe(todoItemsCount+1);
    });
    
    test("Should mark as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });

    
    test("Should retrieve overdue items", () => {
        const today = new Date().toLocaleDateString("en-CA");
        add({
            title: "Overdue Todo",
            completed: false,
            dueDate: "2023-08-20" // Example overdue dueDate
        });
        const overdueItems = overdue();
        expect(overdueItems.length).toBe(1);
        expect(overdueItems[0].title).toBe("Overdue Todo");
    });

    test("Should retrieve due today items", () => {
        const todayString = new Date().toLocaleDateString("en-CA");
        add({
            title: "Due Today Todo",
            completed: false,
            dueDate: todayString
        });
        const dueTodayItems = dueToday();
        expect(dueTodayItems.length).toBe(1);
        expect(dueTodayItems[0].title).toBe("Due Today Todo");
    });

    test("Should retrieve due later items", () => {
        add({
            title: "Due Later Todo",
            completed: false,
            dueDate: "2023-08-30" // Example dueDate later than today
        });
        const dueLaterItems = dueLater();
        //expect(dueLaterItems.length).toBe(1);
       // console.log("dueLaterItems==",dueLaterItems[0].title);
        expect(dueLaterItems[0].title).toBe("Due Later Todo");
    });
})