import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './singlepage.scss';

const Singlepage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setNote(data))
  }, [id])

  return (
    <div>
      {note && (
        <>
          <h1>{note.title}</h1>
          <p>{note.body}</p>
        </>
      )}
      <button onClick={goBack}>Go back</button>
    </div>
  )
}

export {Singlepage}
