/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
// import { useAppSelector } from "../../redux/hook";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);
  // from server
  const { data: todos, isLoading } = useGetTodosQuery(priority);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  // console.log(todos?.data?.length);
  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal></AddTodoModal>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full space-y-4 rounded-lg p-2">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.length === 0 || todos?.data?.length === undefined ? (
            <div className="bg-white rounded-lg text-center font-bold text-2xl p-2">
              <p>There is no task pending</p>
            </div>
          ) : (
            todos?.data?.map((item: any) => (
              <TodoCard key={item._id} {...item}></TodoCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
