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

// Liste de vos clips
const clips = [
  {
    title: 'Công Chúa Mộng Mơ',
    slug: 'cong-chua-mong-mo',
    folder: 'cong-chua-mong-mo',
    youtubeUrl: 'https://www.youtube.com/@MeButXanhkechuyen',
    order: 1
  },
  {
    title: 'Công Chúa Nhỏ Và Giấc Mơ',
    slug: 'cong-chua-nho-va-giac-mo',
    folder: 'cong-chua-nho-va-giac-mo',
    youtubeUrl: 'https://www.youtube.com/@MeButXanhkechuyen',
    order: 2
  },
  {
    title: 'Công Chúa Và Chú Rồng Nhỏ',
    slug: 'cong-chua-va-chu-rong-nho',
    folder: 'cong-chua-va-chu-rong-nho',
    youtubeUrl: 'https://www.youtube.com/@MeButXanhkechuyen',
    order: 3
  },
  {
    title: 'Công Chúa Và Ngôi Sao Sáng',
    slug: 'cong-chua-va-ngoi-sao-sang',
    folder: 'cong-chua-va-ngoi-sao-sang',
    youtubeUrl: 'https://www.youtube.com/@MeButXanhkechuyen',
    order: 4
  },
  {
    title: 'Công Chúa Và Phép Màu Trong Rừng',
    slug: 'cong-chua-va-phep-mau-trong-rung',
    folder: 'cong-chua-va-phep-mau-trong-rung',
    youtubeUrl: 'https://www.youtube.com/@MeButXanhkechuyen',
    order: 5
  },
  {
    title: 'Công Chúa Và Song Thần Kỳ',
    slug: 'cong-chua-va-song-than-ky',
    folder: 'cong-chua-va-song-than-ky',
    youtubeUrl: 'https://www.youtube.com/@MeButXanhkechuyen',
    order: 6
  },
  {
    title: 'Công Chúa Và Thế Giới Mơ Mộng',
    slug: 'cong-chua-va-the-gioi-mo-mong',
    folder: 'cong-chua-va-the-gioi-mo-mong',
    youtubeUrl: 'https://www.youtube.com/@MeButXanhkechuyen',
    order: 7
  },
  {
    title: 'Công Chúa Ngựa Thanky',
    slug: 'congchua-ngua-thanky',
    folder: 'congchua-ngua-thanky',
    youtubeUrl: 'https://www.youtube.com/@MeButXanhkechuyen',
    order: 8
  },
  {
    title: 'Khu Vườn Phép Màu',
    slug: 'khu-vuon-phep-mau',
    folder: 'khu-vuon-phep-mau',
    youtubeUrl: 'https://www.youtube.com/@MeButXanhkechuyen',
    order: 9
  },
  {
    title: 'Khu Vườn Thần Tiên Lung Linh',
    slug: 'khu-vuon-than-tien-lung-linh',
    folder: 'khu-vuon-than-tien-lung-linh',
    youtubeUrl: 'https://www.youtube.com/@MeButXanhkechuyen',
    order: 10
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

// Fonction pour trouver le fichier thumbnail dans un dossier
function findThumbnail(clipFolder) {
  const files = fs.readdirSync(clipFolder);
  const thumbnail = files.find(file => file.includes('thumb.webp'));
  return thumbnail ? path.join(clipFolder, thumbnail) : null;
}

// Fonction pour migrer un clip
async function migrateClip(clip) {
  console.log(`\n🎬 Migration: ${clip.title}...`);
  
  const clipFolder = path.join(__dirname, 'public', 'clips', clip.folder);
  
  // Trouver le thumbnail
  const thumbnailPath = findThumbnail(clipFolder);
  
  if (!thumbnailPath) {
    console.log(`  ❌ Thumbnail manquant dans ${clip.folder}`);
    return;
  }
  
  console.log('  📷 Upload thumbnail...');
  const thumbnailId = await uploadImage(thumbnailPath);
  
  if (!thumbnailId) {
    console.log(`  ❌ Échec upload thumbnail`);
    return;
  }
  
  // Créer le document Clip
  const clipDocument = {
    _type: 'clip',
    title: clip.title,
    slug: {
      _type: 'slug',
      current: clip.slug
    },
    thumbnail: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: thumbnailId
      }
    },
    videoType: 'youtube',
    youtubeUrl: clip.youtubeUrl,
    description: 'Tuyển chọn ca nhạc thiếu nhi — trong trẻo, sôi động và vui nhộn.',
    order: clip.order
  };
  
  try {
    const result = await client.create(clipDocument);
    console.log(`  ✅ ${clip.title} migré avec succès!`);
  } catch (error) {
    console.error(`  ❌ Erreur création document:`, error.message);
  }
}

// Migration principale
async function migrate() {
  console.log('🚀 Début de la migration des clips vers Sanity...\n');
  
  for (const clip of clips) {
    await migrateClip(clip);
    // Pause de 1 seconde entre chaque clip
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n✨ Migration des clips terminée!');
}

migrate();