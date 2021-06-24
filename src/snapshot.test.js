const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

it('renders correctly', async () => {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage();
    await page.goto('https://localhost:3000');
    const image = await page.screenshot();
  
    expect(image).toMatchImageSnapshot();
  });