import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  // Base URL - update this if using a different port
  const baseURL = 'http://localhost:4321';
  
  console.log('🎨 Generating Volks-Typo theme screenshots...\n');
  
  // Desktop screenshots
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1440, height: 900 });
  
  // 1. Desktop Homepage
  console.log('📸 Capturing desktop homepage...');
  await desktopPage.goto(baseURL);
  await desktopPage.waitForLoadState('networkidle');
  await desktopPage.screenshot({ 
    path: join(__dirname, 'screenshots/volks-typo-desktop.png'),
    fullPage: false
  });
  
  // 2. Blog Post
  console.log('📸 Capturing blog post...');
  await desktopPage.goto(`${baseURL}/blog`);
  await desktopPage.waitForLoadState('networkidle');
  // Click on the first blog post
  const firstPost = await desktopPage.locator('article.post-item a').first();
  if (await firstPost.count() > 0) {
    await firstPost.click();
    await desktopPage.waitForLoadState('networkidle');
    await desktopPage.screenshot({ 
      path: join(__dirname, 'screenshots/volks-typo-blog-post.png'),
      fullPage: false
    });
  }
  
  // 3. Categories Page
  console.log('📸 Capturing categories page...');
  await desktopPage.goto(`${baseURL}/categories`);
  await desktopPage.waitForLoadState('networkidle');
  await desktopPage.screenshot({ 
    path: join(__dirname, 'screenshots/volks-typo-categories.png'),
    fullPage: false
  });
  
  // Mobile screenshots
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 390, height: 844 }); // iPhone 14 Pro
  
  // 4. Mobile Homepage
  console.log('📸 Capturing mobile homepage...');
  await mobilePage.goto(baseURL);
  await mobilePage.waitForLoadState('networkidle');
  await mobilePage.screenshot({ 
    path: join(__dirname, 'screenshots/volks-typo-mobile.png'),
    fullPage: false
  });
  
  // 5. Featured Image (composite)
  console.log('📸 Creating featured image...');
  const featuredPage = await context.newPage();
  await featuredPage.setViewportSize({ width: 1280, height: 640 });
  
  // Create a custom page for the featured image
  await featuredPage.goto(baseURL);
  await featuredPage.waitForLoadState('networkidle');
  
  // Take a screenshot that showcases the theme's aesthetic
  await featuredPage.evaluate(() => {
    // Scroll to show the hero section nicely
    window.scrollTo(0, 0);
  });
  
  await featuredPage.screenshot({ 
    path: join(__dirname, 'screenshots/volks-typo-featured.png'),
    fullPage: false
  });
  
  await browser.close();
  
  console.log('\n✅ Screenshots generated successfully!');
  console.log('📁 Check the screenshots/ directory');
  console.log('\n💡 Tip: You may want to manually create a more polished featured image');
  console.log('   combining multiple views or adding text overlays.\n');
}

// Run the script
generateScreenshots().catch(console.error);