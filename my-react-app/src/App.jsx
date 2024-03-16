import React, {useState}from "react";
import './App.css'


const MyForm = () =>{
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        adress: '',
        city: '',
        country: '',
        acceptRules: false,
    });

    const [submitted,  setSubmitted] = useState(false);

    const handleChange = (e) =>{
        const {name, value, type, checked }= e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleBack = () => {
        setSubmitted(false);
    };

    return (
        <div>
            {!submitted ? (
                <form className='formContainer' onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <br />
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    <br />
                    <label>Address:</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} />
                    <br />
                    <label>City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                    <br />
                    <label>Country:</label>
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="Argentina">Argentina</option>
                        <option value="Ukraine">Russia</option>
                        <option value="Italia">China</option>
                    </select>
                    <br />
                    <label>
                        <input type="checkbox" name="acceptRules" checked={formData.acceptRules} onChange={handleChange} />
                        Accept Rules
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div className='text'>
                    <table>
                        <tbody>
                        {Object.entries(formData).map(([key, value]) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{typeof value === 'boolean' ? value.toString() : value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <button onClick={handleBack}>Back</button>
                </div>
            )}
        </div>
    );
};

export default MyForm;




