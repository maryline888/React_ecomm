import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchForm from './SearchForm';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';

Modal.setAppElement('#root');

const products = [
    { id: 1, name: 'Robe', description: 'grandeur 12 mois', price: '10$', category: 'Bébé', image: './img/robe.jpg' },
    { id: 2, name: 'Soulier', description: 'Bébé 9 mois en très bonne état', price: '30$', category: 'Bébé', image: './img/soulier.jpg' },
    { id: 3, name: 'kit vert', description: 'short et t-shirt', price: '20$', category: 'Jeunes enfants', image: './img/vetement.jpg' },
    { id: 4, name: 'Pantalon', description: 'pantalon style cargo 4 ans', price: '10$', category: 'Jeunes enfants', image: './img/jeans.jpg' },
    { id: 5, name: 'Habit de neige', description: 'porté 1 hiver, grandeur 6 ans marque Deux par Deux', price: '50$', category: 'Hiver', image: './img/habitneige.jpg' },
    { id: 6, name: 'Pijama Fox', description: 'petit pijama pour bébé nouveau né grandeur 0-3 mois', price: '10$', category: 'Bébé', image: './img/newborn.jpg' },
];

const Shop = () => {
    const [itemList, setItemList] = useState(products);
    const [isEditing, setIsEditing] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [isAdding, setIsAdding] = useState(false);

    const addItemToList = (newItem) => {
        setItemList(prevItemList => [...prevItemList, newItem]);
    };

    const handleDeleteItem = (id) => {
        setItemList(prevItemList => prevItemList.filter((item) => item.id !== id));
    };

    const handleEditItem = (id) => {
        const itemToEdit = itemList.find(item => item.id === id);
        setEditItem(itemToEdit);
        setIsEditing(true);
    };

    const handleUpdateItem = (updatedItem) => {
        setItemList(prevItemList => {
            const updatedList = prevItemList.map(item => {
                if (item.id === updatedItem.id) {
                    return updatedItem;
                } else {
                    return item;
                }
            });
            return updatedList;
        });

        setIsEditing(false);
        setEditItem(null);
    };

    const handleCloseModal = () => {
        setIsEditing(false);
        setEditItem(null);
    };

    const toggleAddItemForm = () => {
        setIsAdding(!isAdding);
    };

    return (
        <section>
            <div className="shop-header">
                <h2>Mettre en ligne un item</h2>
                <button onClick={toggleAddItemForm}>
                    {isAdding ? 'Fermer le formulaire' : 'Ajouter un nouvel item'}
                </button>
                <Modal
                    isOpen={isAdding}
                    onRequestClose={toggleAddItemForm}
                    contentLabel="Ajouter un nouvel item"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <AddItemForm addItemToList={addItemToList} />
                </Modal>
                <Modal
                    isOpen={isEditing}
                    onRequestClose={handleCloseModal}
                    contentLabel="Modifier l'élément"
                    className="modal"
                    overlayClassName="overlay"
                >
                    {editItem && (
                        <EditItemForm
                            item={editItem}
                            handleUpdateItem={handleUpdateItem}
                            handleCloseModal={handleCloseModal}
                        />
                    )}
                </Modal>
                <SearchForm />
            </div>
            <div className="shop-container">
                {itemList.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.image} alt={item.name} className="card-img" />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p><strong>Catégorie : </strong>{item.category}</p>
                        <button onClick={() => handleEditItem(item.id)}>Modifier</button>
                        <button onClick={() => handleDeleteItem(item.id)}>Supprimer</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Shop;
