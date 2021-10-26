import { useState } from "react";


function EditProduct() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "iphone",
      type: ""
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  function handleAddNewUser() {
    const updateUsers = [
      ...users,
      {
        id: users.length + 11,
        name: "",
        type: ""
      }
    ];
    setUsers(updateUsers);
  }

  function handleEditInputChange(e) {
    setCurrentUser({ ...currentUser, name: e.target.value });
  }

  function handleEditClick(user) {
    setIsEditing(true);
    setCurrentUser({ ...user });
  }

  function handleUpdateUser(id, updatedUser) {
 
    const updatedObject = users.map((user) =>
      user.id === id ? updatedUser : user
    );
    
    setIsEditing(false);
    setUsers(updatedObject);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateUser(currentUser.id, currentUser);
  }

  return (
    <div className="App">
      {currentUser.id && isEditing && (
        <form onSubmit={handleEditFormSubmit}>
          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentUser.name}
            onChange={handleEditInputChange}
          />
          <button type="submit">Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}

      <button onClick={handleAddNewUser}> Add Product in List</button>
      <ul>
        {users.map((user) => (

          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.type}</p>
            {!isEditing && (
              <button onClick={() => handleEditClick(user)}>
                Edit Current Product
              </button>
              
              
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default EditProduct;
