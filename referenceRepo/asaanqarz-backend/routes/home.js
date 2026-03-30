const express = require('express');
const router = express.Router();
const Home = require('../models/Home');
const verifyAdmin = require('../middleware/verifyAdmin');

// Seed default fields if the document does not exist
async function ensureHomeDocument() {
  const existing = await Home.findOne({ slug: 'home' });
  if (existing) return existing;
  const defaults = {
    loanBanner_p1:
      "Welcome to the Akhuwat Loan Scheme, which will help you get rich and become successful. In today's economy, where things change quickly, becoming financially free is more than just a goal. It's a path to a more safe and bright future. We at Akhuwat Loan Apply know how important it is to be financially independent. That's why we want to give you the tools, advice, and support you need to reach your full potential and make your dreams come true.",
    loanBanner_apply:
      'How to Apply for Akhuwat Loan – <a href="/" class="text-primary text-decoration-none fw-bold">ApplyAkhuwatLoan</a>:',
    services_label: 'SERVICES',
    whyChoose_title: 'Why Choose Akhuwat Foundation Loans?',
    quickApply_title: 'Akhuwat Foundation - Quick Apply 2025',
  };
  const created = await Home.create({ slug: 'home', fields: defaults });
  return created;
}

// GET /api/home/gethome
router.get('/gethome', async (req, res) => {
  try {
    const doc = await ensureHomeDocument();
    res.json({ id: doc._id, slug: doc.slug, fields: doc.fields, images: doc.images });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// PUT /api/home/edithome  { fields: { key: "<html>" } }
router.put('/edithome', verifyAdmin, async (req, res) => {
  try {
    const updates = req.body?.fields || {};
    if (typeof updates !== 'object') {
      return res.status(400).json({ error: 'Invalid payload' });
    }
    const doc = await ensureHomeDocument();
    const newFields = { ...(doc.fields || {}), ...updates };
    doc.fields = newFields;
    await doc.save();
    res.json({ id: doc._id, slug: doc.slug, fields: doc.fields });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = { router, ensureHomeDocument };



