require('dotenv').config({ path: '.env.local' });

const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Configuration Sanity
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Liste de vos BD existantes
const bds = [
  {
    title: 'Cái Bóng Kỳ Quác',
    slug: 'cai-bong-ky-quac',
    folder: 'cai-bong-ky-quac',
    order: 1
  },
  {
    title: 'Cái Gối Biết Ngày',
    slug: 'cai-goi-biet-ngay',
    folder: 'cai-goi-biet-ngay',
    order: 2
  },
  {
    title: 'Cây Cầu Bị Gãy',
    slug: 'cay-cau-bi-gay',
    folder: 'cay-cau-bi-gay',
    order: 3
  },
  {
    title: 'Chiếc Ba Lô Kỳ Quác',
    slug: 'chiec-ba-lo-ky-quac',
    folder: 'chiec-ba-lo-ky-quac',
    order: 4
  },
  {
    title: 'Chiếc Bánh Mì Biết Chạy',
    slug: 'chiec-banh-mi-biet-chay',
    folder: 'chiec-banh-mi-biet-chay',
    order: 5
  },
  {
    title: 'Chiếc Gương Ma Thuật',
    slug: 'chiec-guong-ma-thuat',
    folder: 'chiec-guong-ma-thuat',
    order: 6
  },
  {
    title: 'Cuộc Phiêu Lưu Mới',
    slug: 'cuocphieuluumoi',
    folder: 'cuocphieuluumoi',
    order: 7
  },
  {
    title: 'Tiếng Vọng Bí Ẩn',
    slug: 'tieng-vong-bi-an',
    folder: 'tieng-vong-bi-an',
    order: 8
  }
];

// Fonction pour uploader une image
async function uploadImage(imagePath) {
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: path.basename(imagePath),
    });
    return asset._id;
  } catch (error) {
    console.error(`Erreur upload ${imagePath}:`, error.message);
    return null;
  }
}

// Fonction pour migrer une BD
async function migrateBD(bd) {
  console.log(`\n📖 Migration: ${bd.title}...`);
  
  const bdFolder = path.join(__dirname, 'public', 'bd', bd.folder);
  
  // Upload thumbnail - MODIFIÉ ICI
  const thumbnailPath = path.join(bdFolder, 'cover_9x16.webp');
  console.log('  📷 Upload thumbnail...');
  const thumbnailId = await uploadImage(thumbnailPath);
  
  if (!thumbnailId) {
    console.log(`  ❌ Échec: thumbnail manquant`);
    return;
  }
  
  // Upload pages (00.webp à 05.webp)
  const pageIds = [];
  for (let i = 0; i <= 5; i++) {
    const pageNum = i.toString().padStart(2, '0');
    const pagePath = path.join(bdFolder, `${pageNum}.webp`);
    
    if (fs.existsSync(pagePath)) {
      console.log(`  📄 Upload page ${pageNum}...`);
      const pageId = await uploadImage(pagePath);
      if (pageId) {
        pageIds.push({
          _type: 'image',
          _key: `page-${pageNum}`,
          asset: {
            _type: 'reference',
            _ref: pageId
          }
        });
      }
    }
  }
  
  // Créer le document BD
  const bdDocument = {
    _type: 'bd',
    title: bd.title,
    slug: {
      _type: 'slug',
      current: bd.slug
    },
    thumbnail: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: thumbnailId
      }
    },
    pages: pageIds,
    order: bd.order
  };
  
  try {
    const result = await client.create(bdDocument);
    console.log(`  ✅ ${bd.title} migré avec succès!`);
  } catch (error) {
    console.error(`  ❌ Erreur création document:`, error.message);
  }
}

// Migration principale
async function migrate() {
  console.log('🚀 Début de la migration vers Sanity...\n');
  
  for (const bd of bds) {
    await migrateBD(bd);
    // Pause de 1 seconde entre chaque BD
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n✨ Migration terminée!');
}

migrate();