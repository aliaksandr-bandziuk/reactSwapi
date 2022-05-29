import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

import './note.scss'

const Note = () => {

  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const noreQuery = searchParams.get('note') || '';

  const latest = searchParams.has('latest');

  const startsForm = latest ? 80 : 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};

    if (query.length) params.note = query;
    if (isLatest) params.latest = true;

    setSearchParams(params)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <div>
      <h1>My Notes</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search"/>
        <label style={{padding: '0 1rem'}}>
          <input type="checkbox" name="latest" /> New only
        </label>
        <input type="submit" value="Search" />
      </form>
      {
        notes.filter(
          note => note.title.includes(noreQuery) && note.id >= startsForm
        ).map(note => (
          <Link key={note.id} to={`/notes/${note.id}`}>
            <li>{note.title}</li>
          </Link>
        ))
      }
    </div>
  )
}

export {Note}