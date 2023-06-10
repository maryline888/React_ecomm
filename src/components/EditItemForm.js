import React, { useState, useEffect } from 'react';
import Button from './Button';

const EditItemForm = ({ item, handleUpdateItem, handleCloseModal }) => {
    const [formState, setFormState] = useState(item);

    useEffect(() => {
        setFormState(item);
    }, [item]);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateItem(formState);
        handleCloseModal();
    };

    return (
        <form onSubmit={handleSubmit} className='add-form'>
            <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                value={formState.description}
                onChange={handleChange}
            />
            <input
                type="text"
                name="price"
                value={formState.price}
                onChange={handleChange}
            />
            <input
                type="text"
                name="category"
                value={formState.category}
                onChange={handleChange}
            />
            <input
                type="text"
                name="image"
                value={formState.image}
                onChange={handleChange}
            />
            <Button
                // onClick={handleClick}
                className='add-form-btn'
                text='Envoyer'
            />
        </form>
    );
};

export default EditItemForm;
