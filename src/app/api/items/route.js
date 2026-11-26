import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Item from '@/models/Item';
import Type from '@/models/Type';
import Category from '@/models/Category';

export async function GET(request) {
  try {
    await connectDB();

    void Type;
    void Category;

    const { searchParams } = new URL(request.url);
    const typeParam = searchParams.get('type');     
    const categoryParam = searchParams.get('category'); 

    const filter = {};

    if (typeParam) {
      const typeDoc = await Type.findOne({ title: typeParam.trim() }).lean();
      if (!typeDoc) {
        return NextResponse.json([], { status: 200 });
      }
      filter.type = typeDoc._id;
    }

    if (categoryParam) {
      const catDoc = await Category.findOne({
        title: categoryParam.toLowerCase().trim(),
      }).lean();
      if (!catDoc) {
        return NextResponse.json([], { status: 200 });
      }
      filter.categories = catDoc._id;
    }

    const items = await Item.find(filter)
      .populate('type')
      .populate('categories')
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error('GET /api/items error:', error);
    return NextResponse.json(
      { error: 'Failed to load items' },
      { status: 500 }
    );
  }
}