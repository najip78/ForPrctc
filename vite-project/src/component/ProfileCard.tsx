import React, { useState } from 'react';

export default function ProfileCard({ users, onDelete, onEdit }) {
    const [editMode, setEditMode] = useState(null);
    const [editedUser, setEditedUser] = useState({});

    const handleEditClick = (user) => {
        setEditMode(user.name); // Set the current user to edit
        setEditedUser({ ...user }); // Initialize edit form with the user's current data
    };

    const handleSave = () => {
        onEdit(editMode, editedUser); // Save the edited user
        setEditMode(null); // Exit edit mode
    };

    return (
        <>
            {users.map((user) => (
                <div key={user.name} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                    {editMode === user.name ? (
                        <>
                            <input
                                type="text"
                                value={editedUser.name}
                                onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                value={editedUser.age}
                                onChange={(e) => setEditedUser({ ...editedUser, age: e.target.value })}
                                placeholder="Age"
                            />
                            <input
                                type="text"
                                value={editedUser.job}
                                onChange={(e) => setEditedUser({ ...editedUser, job: e.target.value })}
                                placeholder="Job"
                            />
                            <input
                                type="text"
                                value={editedUser.hobbies.join(', ')}
                                onChange={(e) =>
                                    setEditedUser({
                                        ...editedUser,
                                        hobbies: e.target.value.split(',').map((hobby) => hobby.trim()),
                                    })
                                }
                                placeholder="Hobbies (comma-separated)"
                            />
                            <button onClick={handleSave}>Save</button>
                            <button onClick={() => setEditMode(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <h2>Name: {user.name}</h2>
                            <p>Age: {user.age}</p>
                            <p>Job: {user.job}</p>
                            <p>Hobbies: {user.hobbies.join(', ')}</p>
                            <button onClick={() => onDelete(user.name)}>Delete</button>
                            <button onClick={() => handleEditClick(user)}>Edit</button>
                        </>
                    )}
                </div>
            ))}
        </>
    );
}
