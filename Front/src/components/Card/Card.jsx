import { react } from "react";



export default function Card({ id, title, description, isCompleted, onToggle }){
  return(
    <article className="rounded-xl border border-gray-100 bg-white p-4 sm:p-6 lg:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className={`text-lg font-medium text-pretty ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
            {title || 'Nueva Tarea'}
          </h4>
          {description && (
            <p className={`mt-2 text-sm ${isCompleted ? 'text-gray-300 line-through' : 'text-gray-700'}`}>
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id={`task-${id}`}
            checked={isCompleted}
            onChange={() => onToggle && onToggle(id)}
            className="size-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
        </div>
      </div>
    </article>
  )
}
