const express = require('express');
const router = express.Router();
const Content = require('../models/Content');
const verifyAdmin = require('../middleware/verifyAdmin');

async function ensureContent(slug) {
  let doc = await Content.findOne({ slug });
  if (!doc) {
    doc = await Content.create({ slug, fields: {}, images: {} });
  }
  return doc;
}

// GET /api/content/:slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const doc = await ensureContent(slug);
    res.json({ id: doc._id, slug: doc.slug, fields: doc.fields, images: doc.images });
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Internal Server Error');
  }
});

// PUT /api/content/:slug
router.put('/:slug', verifyAdmin, async (req, res) => {
  try {
    const { slug } = req.params;
    const updates = req.body?.fields || {};
    if (typeof updates !== 'object') {
      return res.status(400).json({ error: 'Invalid payload' });
    }
    const doc = await ensureContent(slug);
    doc.fields = { ...(doc.fields || {}), ...updates };
    await doc.save();
    res.json({ id: doc._id, slug: doc.slug, fields: doc.fields });
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = { router, ensureContent };



