import crypto from 'crypto';
import connection from '../database/connection';

export default {
  // Create ong
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
    return res.json({ id });
  },

  // List all ongs
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },
};
