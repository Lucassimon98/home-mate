import './index.css'
import React, { useState } from "react";

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");
    const [selected, setSelected] = useState([]);

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text.length) {
            return;
        }
        const newItem = {
            text: text,
            id: Date.now(),
        };
        setItems(items.concat(newItem));
        setText("");
    };

    const handleDelete = (ids) => {
        setItems(items.filter((item) => (Array.isArray(ids) ? !ids.includes(item.id) : item.id !== ids)));
        setSelected([]);
    };

    const handleSelect = (id) => {
        if (selected.includes(id)) {
            setSelected(selected.filter((i) => i !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    return (
        <div className='d-flex align-items-center flex-column'>
            <h2>Lista de Compras</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit}>
                <label className='text-center' htmlFor="new-todo">O que precisa comprar?</label>
                <br />
                <div>
                    <input id="new-todo" value={text} onChange={handleInputChange} />
                    <button className='btn-primary'>Adicionar</button>
                </div>
            </form>
            <br />
            <ul className='d-flex flex-column justify-content-center'>
                {items.map((item) => (
                    <li key={item.id}>
                        <input type="checkbox" onClick={() => handleSelect(item.id)} />
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
            {selected.length > 0 ? (
                <button className='btn-danger' onClick={() => handleDelete(selected)}>Excluir selecionados</button>
            ) : (
                <button className='w-auto' disabled>Selecione para remover</button>
            )}
        </div>
    );
};

export default TodoList;
