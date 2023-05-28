<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/fabiansefranek/serverless-cors-proxy">
  </a>

  <h3 align="center">Serverless Cors Proxy</h3>

  <p align="center">
    A serverless cors proxy to avoid cors-related problems 
    <br>
    <a href="https://cors.fabiansefranek.com/https://example.com">View Demo</a>
    ·
    <a href="https://github.com/fabiansefranek/serverless-cors-proxy/issues">Report Bug</a>
    ·
    <a href="https://github.com/fabiansefranek/serverless-cors-proxy/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#limits">Limits</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->

## Getting Started

To get this service up and running follow these steps.

### Prerequisites

```sh
npm install wrangler
```

### Installation

1. Authenticate with `wrangler login`
2. Clone the repo
   ```sh
   git clone https://github.com/fabiansefranek/serverless-cors-proxy.git
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Publish
   ```sh
   wrangler publish
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

After publishing the worker you can use it by appending the url of you want to proxy to the url of the worker.

```sh
<worker-url>/<url-to-proxy>
```

Example:

```sh
curl https://cors.fabiansefranek.com/https://example.com
```

## Limits

Due to Cloudflare's limits the worker has the following restrictions:

- Only GET requests allowed
- 100MB response body size (if exceeded, worker will return a 413 error code)
