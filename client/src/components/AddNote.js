import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');

	const handleChange = (event) => {
			setNoteText(event.target.value);

	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='7'
				cols='10'
				placeholder='today I am feeling...'
				value={noteText}
				onChange={handleChange}
			></textarea>
				<button className='save' onClick={handleSaveClick}>
					save
				</button>
			</div>
	);
};

export default AddNote;