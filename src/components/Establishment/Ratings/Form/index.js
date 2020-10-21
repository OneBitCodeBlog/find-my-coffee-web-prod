import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import styled from 'styled-components';
import RatingService from '../../../../services/rating';

const NewRating = styled.div`
  padding-bottom: 50px;
`
const Input = styled.input`
  margin-bottom: 10px;
  height: 20px;
  width: 90%;
  border-width: 0;
`
const TextArea = styled.textarea`
  margin-bottom: 10px;
  height: 40px;
  width: 90%;
  border-width: 0;
`
const Button = styled.button`
  color: white;
  background-color: #a5572f;
  width: 90px;
  height: 30px;
  margin-top: 10px;
  border-color: #a5572f;
  font-weight: 800;
`

const Form = (props) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [value, setValue] = useState(1);

  async function handleSubmit(e) {
    e.preventDefault();

    const store_params = {
      latitude: props.place.geometry.location.lat,
      longitude: props.place.geometry.location.lng,
      name: props.place.name,
      address: props.place.formatted_address,
      google_place_id: props.place.place_id
    }

    const rating_params = {
      value: (value == null) ? 1 : value,
      opinion: message,
      user_name: name
    }

    await RatingService.create(store_params, rating_params);
    
    props.loadStore()

    setName('');
    setMessage('');
  }


  return (
    <NewRating>
      <h4>Deixe sua Opinião</h4>

      <form onSubmit={handleSubmit}>
        <Input name="name"
          type="text"
          placeholder="Seu primeiro nome"
          onChange={(e) => setName(e.target.value)}
          value={name} />

        <TextArea name="message"
          className="textarea"
          placeholder="Sua opinião"
          onChange={(e) => setMessage(e.target.value)}
          value={message}></TextArea>

        <div>
          <ReactStars count={5} size={24} activeColor="#ffd700"
            value={value}
            onChange={(e) => setValue(e)} />

          <Button type="submit" className="button is-danger">Enviar</Button>
        </div>
      </form>
    </NewRating>
  )
}

export default Form;