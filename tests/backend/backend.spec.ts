import { test, expect } from '@playwright/test';

const URL = 'https://flights-api.buraky.workers.dev/';

// Request context is reused by all tests in the file.
let apiContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    // All requests we send go to this API endpoint.
    baseURL: URL,
  });
});

test.afterAll(async ({ }) => {
  // Dispose all responses.
  await apiContext.dispose();
});

test('Get status code 200 dönmeli', async ({ page }) => {
  const response = await apiContext.get('');
  expect(response.ok()).toBeTruthy();
});



test('Get response iceriginin kontrolu', async ({ page }) => {
  const response = await apiContext.get('');
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();
  
  expect(responseBody).toHaveProperty('data');
  expect(Array.isArray(responseBody.data)).toBeTruthy();

  const expectedObject = { from: 'IST', to: 'LAX' };
  expect(responseBody.data).toEqual(expect.arrayContaining([expect.objectContaining(expectedObject)]));
});





test('Header Content-Type headeri olmali ve degeri application/json olmali', async ({ page }) => {
  const response = await apiContext.get('');
  expect(response.ok()).toBeTruthy();

  const headers = await response.headers();

  // Assert the "Content-Type" header exists
  expect(headers).toHaveProperty('content-type');

  // Assert the value of the "Content-Type" header is 'application/json'
  expect(headers['content-type']).toBe('application/json');
});
