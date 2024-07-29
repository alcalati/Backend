import * as buyService from './buy.service.js';

export async function buy(req, res) {
  const ticketLines = req.body;
  const user = req.user;
  const checkMoney = await buyService.checkMoney({ticketLines,});
  if (user.cash < checkMoney){
    res.status(402);
    res.json('Insufficient Funds');
    return;
  }
  const {ticket, movements} = await buyService.buy({ticketLines, user,});
  res.json({ ticket, movements });
}
