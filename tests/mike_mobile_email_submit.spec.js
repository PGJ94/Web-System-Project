import { test, devices } from '@playwright/test'

test.use({
  ...devices['Galaxy S9+']
})

test('test', async ({ page }) => {
  await page.goto('https://mdellis73.github.io/mywebclass-simulation/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click()
  await page.getByPlaceholder('Email address').click()
  await page.getByPlaceholder('Email address').fill('mde7@njit.edu')
  await page.getByPlaceholder('Email address').press('Enter')
  await page.getByPlaceholder('Email address').click()
  await page.getByPlaceholder('Email address').fill('mde7@njit.edu')
  await page.getByRole('button', { name: 'Subscribe' }).click()
})
