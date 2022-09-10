import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';

const App = () => {
	const [notes, setNotes] = useState([
		{
			text: 'content',
			date: '9/8/2022',
		},
    {
			text: 'at peace',
			date: '9/9/2022',
		}
	]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	return (
			<div className='container'>
        <h1>mood tracker</h1>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
				/>
			</div>
	);
};

export default App;