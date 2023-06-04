import React, { useState } from 'react';

const AddItemForm = (props) => {
    const [item, setItem] = useState({
        id: null,
        name: '',
        description: '',
        price: '',
        category: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setItem(prevItem => ({
                ...prevItem,
                image: reader.result
            }));
        };
        reader.readAsDataURL(imageFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addItemToList(item);
        setItem({
            id: null,
            name: '',
            description: '',
            price: '',
            category: '',
            image: null
        });
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Que voulez-vous mettre en vente ?</h1>
                <label>
                    <input type="text" name="name" placeholder="Titre de l'item" value={item.name} onChange={handleChange} />
                </label>
                <label>
                    <input type="text" name="description" placeholder="Description" value={item.description} onChange={handleChange} />
                </label>
                <label>
                    <input type="text" name="price" placeholder="Prix" value={item.price} onChange={handleChange} />
                </label>
                <label>
                    <input type="text" name="category" placeholder="Catégorie" value={item.category} onChange={handleChange} />
                </label>
                <label>
                    <span>Veuillez choisir une image</span>
                    <input type="file" name="image" onChange={handleImageChange} />
                </label>
                <button type="submit">Ajouter</button>
            </form>

        </section>
    );
};

export default AddItemForm;
