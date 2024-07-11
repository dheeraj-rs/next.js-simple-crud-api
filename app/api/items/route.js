import connectDB from '@/lib/db';
import Item from '@/models/Item';

export async function GET() {
  await connectDB();
  const items = await Item.find({});
  return new Response(JSON.stringify(items), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  await connectDB();
  const { name, description } = await request.json();
  const newItem = new Item({ name, description });
  await newItem.save();
  return new Response(JSON.stringify(newItem), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
