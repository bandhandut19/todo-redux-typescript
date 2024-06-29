import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Button className="bg-primary-gradient mb-5 text-xl font-bold">
          Add todo
        </Button>
        <Button className="bg-primary-gradient mb-5 text-xl font-bold">
          Filter
        </Button>
      </div>
      <div className="bg-primary-gradient w-full h-full space-y-4 rounded-lg p-2">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          {/* <div className="bg-white rounded-lg text-center font-bold text-2xl p-2">
          <p>There is no task pending</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
