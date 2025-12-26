import { Card, CardContent } from '@/components/ui/card';

const codeSnippet = `
import requests

# Your API key
api_key = "YOUR_API_KEY"

# Define the endpoint and parameters
symbol = "AAPL"
endpoint = f"https://api.equitystream.io/v1/quote/{symbol}"
headers = {"Authorization": f"Bearer {api_key}"}

# Make the request
response = requests.get(endpoint, headers=headers)

# Print the JSON response
if response.status_code == 200:
    print(response.json())
else:
    print(f"Error: {response.status_code}")
`;

const jsonResponse = `
{
  "symbol": "AAPL",
  "name": "Apple Inc.",
  "price": 171.48,
  "change": 2.53,
  "percent_change": "1.50%",
  "volume": 52488500,
  "timestamp": 1672444800000
}
`;

export function TechProof() {
  return (
    <section id="tech-proof" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Developer-First by Design</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our API is designed for ease of use and rapid integration. Get up and running with just a few lines of code.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gray-800 p-3 text-xs font-medium text-gray-300">
                Python Request Example
              </div>
              <div className="bg-gray-900">
                <pre className="overflow-x-auto p-4 text-sm">
                  <code className="font-code text-gray-100">{codeSnippet.trim()}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gray-800 p-3 text-xs font-medium text-gray-300">
                Sample JSON Response
              </div>
              <div className="bg-gray-900">
                <pre className="overflow-x-auto p-4 text-sm">
                  <code className="font-code text-gray-100">{jsonResponse.trim()}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
