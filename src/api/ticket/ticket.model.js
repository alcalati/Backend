import { Schema, model } from 'mongoose';

const ticketSchema = new Schema({
  userId: { type: String, required: true, },
  date: { type: String, required: true, },
});

const ticketModel = model('Ticket', ticketSchema, 'ticket');
export default ticketModel;
