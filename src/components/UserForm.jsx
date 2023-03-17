import { useState } from "react";
import { User } from "../models/User.js"
import { Address } from "../models/Address.js";

export const UserForm = ({ addUser }) => {
    const [user, setUser] = useState(
        new User("", "", "", new Address("", "", ""))
    );
    const [output, setOutput] = useState("");

    //Gör så att submit button inte tvingar refresh etc
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("btn click", user);
        // setOutput(`User Created!\n${user.firstname} is of ${user.age} and goes by the alias ${user.nickname}.
        // He/she lives in ${user.address.street} which is located in the city ${user.address.city}`);
        addUser(user);

    };

    const handleAddressChange = (e) => {
        setUser({
            ...user,
            address: { ...user.address, [e.target.name]: e.target.value },
        });
    }

    //Gör så att input går o ändras på??
    const handleChange = (e) => {
        // if (e.target.type === "number") {
        //     setUser({ ...user, [e.target.name]: +e.target.value });
        // }

        // if (e.target.type === "checkbox") {
        //     setUser({ ...user, [e.target.name]: e.target.value });
        // }
        setUser({ ...user, [e.target.name]: e.target.value });

    };

    return (
        <>

            {/* {output && (
                <div className="textBox">
                    <h1>{output}</h1>
                </div>
            )} */}

            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder="Name" value={user.firstname} onChange={handleChange} name="firstname" />
                    <input placeholder="Age" type="number" value={user.age} onChange={handleChange} name="age" />
                    <input placeholder="Nickname" value={user.nickname} onChange={handleChange} name="nickname" />
                </div>
                <div>
                    <input placeholder="Street" value={user.address.street} onChange={handleAddressChange} name="street" />
                    <input placeholder="Zip" type="number" value={user.address.zip} onChange={handleAddressChange} name="zip" />
                    <input placeholder="City" value={user.address.city} onChange={handleAddressChange} name="city" />
                </div>
                <button>Spara</button>

                <p className="">{JSON.stringify(user)}</p>


            </form>
            <p>{user.firstname}</p>
            <p>{user.address.street}</p>
        </>
    );
}