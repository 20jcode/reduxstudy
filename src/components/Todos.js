const TodoItem = ({ todo, onToggle, onRemove}) => {
    return (
        <div>
            <input 
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readonly={true}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none '}}>
                {todo.text}
            </span>
            <button onClick={() => onRemove(todo.id)}>del</button>
        </div>
    );
};

const Todos = ({
    input,
    todos,
    onChangeInput,
    oninsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => {
        e.preventDefault();
        oninsert(input);
        onChangeInput('');
    };
    const onChange = e => onChangeInput(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange}/>
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default Todos;