import connectDB from '../../lib/db';
import Item from '../../models/Item';

export async function handler(event, context) {
  await connectDB();
  const method = event.httpMethod;
  const id = event.queryStringParameters?.id;

  if (method === 'GET') {
    if (id) {
      const item = await Item.findById(id);
      return {
        statusCode: item ? 200 : 404,
        body: JSON.stringify(item),
      };
    } else {
      const items = await Item.find();
      return {
        statusCode: 200,
        body: JSON.stringify(items),
      };
    }
  }

  if (method === 'POST') {
    const { name, description } = JSON.parse(event.body);
    const newItem = new Item({ name, description });
    await newItem.save();
    return {
      statusCode: 201,
      body: JSON.stringify(newItem),
    };
  }

  if (method === 'PUT') {
    const { name, description } = JSON.parse(event.body);
    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    return {
      statusCode: updatedItem ? 200 : 404,
      body: JSON.stringify(updatedItem),
    };
  }

  if (method === 'DELETE') {
    await Item.findByIdAndDelete(id);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Item deleted' }),
    };
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed',
  };
}
