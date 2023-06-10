import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchForm from './SearchForm';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';
import Button from './Button';

Modal.setAppElement('#root');



const Shop = ({ products }) => {
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

                <Button
                    onClick={toggleAddItemForm}
                    className='add-form-btn'
                    text='Mettre en ligne un item'
                />
                <Modal
                    isOpen={isAdding}
                    onRequestClose={toggleAddItemForm}
                    contentLabel="Ajouter un nouvel item"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <button onClick={toggleAddItemForm} className="close-modal-btn">X</button>
                    <AddItemForm addItemToList={addItemToList} />                </Modal>
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
            </div>
            <SearchForm />
            <div className="shop-container">
                {itemList.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={process.env.PUBLIC_URL + item.image} alt={item.name} className="card-img" />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p><strong>Catégorie : </strong>{item.category}</p>
                        <div className='card-btns'>
                            <Button
                                onClick={() => handleEditItem(item.id)}
                                className='btn '
                                text='Modifier'
                            />
                            <Button
                                onClick={() => handleDeleteItem(item.id)}
                                className='btn btn-red'
                                text='Supprimer'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Shop;
