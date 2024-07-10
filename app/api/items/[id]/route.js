import connectDB from '@/lib/db';
import Item from '@/models/Item';

export async function GET(request, { params }) {
  await connectDB();
  const item = await Item.findById(params.id);
  if (!item) {
    return new Response('Item not found', { status: 404 });
  }
  return new Response(JSON.stringify(item), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(request, { params }) {
  await connectDB();
  const { name, description } = await request.json();
  const updatedItem = await Item.findByIdAndUpdate(
    params.id,
    { name, description },
    { new: true }
  );
  if (!updatedItem) {
    return new Response('Item not found', { status: 404 });
  }
  return new Response(JSON.stringify(updatedItem), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request, { params }) {
  await connectDB();
  const deletedItem = await Item.findByIdAndDelete(params.id);
  if (!deletedItem) {
    return new Response('Item not found', { status: 404 });
  }
  return new Response('Item deleted', { status: 200 });
}
