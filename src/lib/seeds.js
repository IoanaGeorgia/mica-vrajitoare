import mongoose from 'mongoose';
import { connectDB } from './db.js';
import Type from '../models/Type.js';
import Category from '../models/Category.js';
import Item from '../models/Item.js';
import { animalData, plantData } from './mockData.js';

export async function seedDatabase() {
  console.log('Pornește seed...');
  await connectDB();
  console.log('Conectat la DB!');

  const typeNames = ['animale', 'plante'];
  const typeMap = new Map();

  for (const name of typeNames) {
    const doc = await Type.findOneAndUpdate(
      { title: name },
      { $setOnInsert: { title: name } },
      { upsert: true, new: true }
    );
    typeMap.set(name, doc._id);
  }

  const allEntries = [...animalData, ...plantData];
  const uniqueCategories = [
    ...new Set(
      allEntries.flatMap((entry) =>
        (entry.categories || []).map((c) => c.toLowerCase().trim())
      )
    ),
  ];

  const categoryMap = new Map();

  for (const catTitle of uniqueCategories) {
    if (!catTitle) continue;
    const doc = await Category.findOneAndUpdate(
      { title: catTitle },
      { $setOnInsert: { title: catTitle } },
      { upsert: true, new: true }
    );
    categoryMap.set(catTitle, doc._id);
  }

  for (const entry of allEntries) {
    const typeId = typeMap.get(entry.type);
    const categoryIds = (entry.categories || [])
      .map((c) => categoryMap.get(c.toLowerCase().trim()))
      .filter(Boolean);

    await Item.findOneAndUpdate(
      { site_slug: entry.site_slug },
      {
        $set: {
          title: entry.title,
          scientific_title: entry.scientific_title,
          site_slug: entry.site_slug,
          categories: categoryIds,
          type: typeId,
          image: entry.image,
          text: entry.text,
        },
      },
      { upsert: true, new: true }
    );
  }

  return { seededItems: allEntries.length };
}

seedDatabase()
  .then((res) => {
    console.log('Seed complet:', res);
    return mongoose.connection.close();
  })
  .catch(async (err) => {
    console.error('Eroare la seed:', err);
    await mongoose.connection.close();
    process.exit(1);
  });