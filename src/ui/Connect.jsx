import { useState } from 'react';
import { Form } from 'react-router-dom';

function Connect() {
  const [description, setDescription] = useState('');
  const [isLenghtExcluded, setIsLengthExcluded] = useState(false);
  function handleChange(e) {
    const maxWords = 250;
    if (!e?.target?.value) {
      return;
    }
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/);
    console.log('words---', words);
    if (words.length <= maxWords) {
      console.log('hiiii');
      setDescription(inputText);
      setIsLengthExcluded(false);
    } else {
      setIsLengthExcluded(true);
    }
  }
  return (
    <div className="mx-auto my-12 max-w-3xl p-8">
      <Form method="POST">
        <div className="mb-5 flex flex-col justify-center sm:flex-row sm:items-center">
          <label htmlFor="name" className="sm:basis-30">
            Full Name
          </label>
          <input
            className="input"
            name="name"
            type="text"
            required
            placeholder="user name"
          />
        </div>
        <div className="mb-5 flex flex-col justify-center sm:flex-row sm:items-center">
          <label htmlFor="phone" className="sm:basis-30">
            Phone Number
          </label>
          <input
            className="input"
            name="phone"
            type="tel"
            required
            placeholder="phone number"
          />
        </div>
        <div className="mb-5 flex flex-col justify-center sm:flex-row sm:items-center">
          <p className="sm:basis-30">Choose option</p>
          <div className="flex flex-row items-center gap-x-6">
            <div className="flex gap-x-1">
              <input type="radio" name="suggestion" id="suggestion" />
              <label htmlFor="suggestion">Suggestion</label>
            </div>
            <div className="flex gap-x-1">
              <input type="radio" name="complaint" id="complaint" />
              <label htmlFor="complaint">Complaint</label>
            </div>
          </div>
        </div>
        <div className="mb-5 flex flex-col justify-center sm:flex-row">
          <label className="sm:basis-30" htmlFor="description">
            Description
          </label>
          <div className="flex w-1/2 flex-col">
            <textarea
              className="description"
              name="description"
              type="text"
              placeholder="Enter upto 250 words..."
              onChange={handleChange}
              value={description}
              required
            />
            {isLenghtExcluded && (
              <p className="mt-2 mb-2 rounded-full bg-red-100 px-2 py-1 text-center text-xs text-red-500 sm:text-sm">
                Only 250 words are allowed to send as a message
              </p>
            )}
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Connect;
