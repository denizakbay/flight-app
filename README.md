# Flight Search Application QA Tests

This project contains QA tests for the "Flight Search Application," covering both the frontend and backend.

## Project Details

- **Application**: Flight App
- **Test Framework**: Playwright
- **Development Environment**: Visual Studio Code

## Requirements

- Node.js 14 or above
- Playwright 1.17 or above (install with: `npm install -D @playwright/test`)

## How to Run

1. Clone the project or download it as a ZIP file.
2. Navigate to the root directory of the project in your terminal: `cd flight-search-qa-tests`
3. Install the required dependencies by running the following command:
   ```bash
   npm install

1. To run the tests, execute the following command:
   
    ```bash
     npx playwright test

## Tests
### Backend Tests
 Backend tests are written using Playwright and focus on the API running at "https://flights-api.buraky.workers.dev/".

1. Should return a status code of 200: Verifies that the HTTP status code of the response from the API is 200.

2. Should validate the response content: Validates that the response from the API follows the correct structure and format, including the presence of the "data" field.

3. Header should have Content-Type header with value application/json: Ensures that the "Content-Type" header in the response from the API is set to "application/json".

### Frontend Tests

This repository contains automated UI tests for the Flight App application using Playwright, a UI testing tool similar to Playwright/Selenium. The tests are designed to ensure the proper functionality of the application's user interface and to identify potential issues.

#### 1. Input Field Validation

This test scenario validates that the "From" and "To" input fields do not accept the same values. It aims to detect if the application allows entering the same city in both fields, which should be considered a bug.

#### 2. Flight Listing Verification

This scenario checks whether the flight listings accurately correspond to the selected "From" and "To" locations. Additionally, it verifies that the count displayed as "Found X items" matches the actual number of listed flights.

### Important Notes
After executing the test results will be reported.

