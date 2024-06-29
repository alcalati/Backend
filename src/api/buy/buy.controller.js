import * as buyService from './buy.service.js';

export async function buy(req, res) {
  const ticketLines = req.body;
  const user = req.user;
  const checkMoney = await buyService.checkMoney({ticketLines,});
  if (user.cash < checkMoney){
    console.log('Insufficient Funds');
    res.status(402);
    res.json('Insufficient Funds');
    return;
  }
  const addItem = await buyService.buy({ticketLines, user,});
  res.json(addItem);
}