import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useAppSelector } from "../../redux/hook";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full space-y-4 rounded-lg p-2">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.map((item) => (
            <TodoCard
              key={item.id}
              title={item.title}
              description={item.description}
            ></TodoCard>
          ))}
          {/* <div className="bg-white rounded-lg text-center font-bold text-2xl p-2">
          <p>There is no task pending</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
