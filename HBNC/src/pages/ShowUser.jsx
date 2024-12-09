import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditLogin = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        console.log(id);
        fetch(`http://localhost:5555/books/${id}`)
        .then(response =>  response.json())
        .then(data => {
               setAuthor(data.name);
                 setPublishYear(data.password);
                  setTitle(data.email);
                 setLoading(false);
        })
        .catch((error) => {
                setLoading(false);
                alert('an error happened. Please check console');
                console.log(error);
            })
    
    }, [])
    const handleSaveLogin = () => {
     

        setLoading(true);
        fetch('http://localhost:5555/books', {
            method: '5555',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' },
            mode: 'cors'

        }).then(() => {
            setLoading(false);
            navigate('/');
        })
            .catch((error) => {
                setLoading(false);
                alert('an error happened. Please check console');
                console.log(error);
            })
    }

    return (
        <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl m-4'>
            Edit Book
        </h1>
        {loading ? <Spinner /> : ''}
        <div className='spin-container flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='label-container m-4'>
                <label className='label text-3xl mr-4 text-grey-500 '>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input border-2 border-grey-500 p-4 py-2 w-full' />
            </div>
            <div className='label-container m-4'>
                <label className='label text-3xl mr-4 text-grey-500 '>paswword</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='input border-2 border-grey-500 p-4 py-2 w-full ' />
            </div>
            <div className='label-container m-4'>
                <label className='label text-3xl mr-4 text-grey-500 '>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='input border-2 border-grey-500 p-4 py-2 w-full' />
            </div>
            <button className='btn p2 bg-sky-300 m-8' onClick={handleSaveLogin}>Save</button>
        </div>
    </div>


    )
}

export default EditLogin