import { test, devices } from '@playwright/test'

test.use({
  ...devices['Galaxy S9+']
})

test('Mobile Version Privacy Checkup', async ({ page }) => {
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/privacy.html')
  await page.getByRole('heading', { name: 'How We Use Your Info' }).click()
  await page.getByRole('heading', { name: 'Changes to this Privacy Policy' }).click()
  await page.getByRole('link', { name: 'MyWebClass.org' }).click()
})
