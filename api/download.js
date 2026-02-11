const http = require('http');

export default function handler(req, res) {
    // Target URL (your backend server)
    const fileUrl = 'http://3.110.151.43/api/download/apk';

    // Make a request to the backend
    http.get(fileUrl, (proxyRes) => {
        // Forward relevant headers from the backend response
        if (proxyRes.headers['content-type']) {
            res.setHeader('Content-Type', proxyRes.headers['content-type']);
        }
        if (proxyRes.headers['content-disposition']) {
            res.setHeader('Content-Disposition', proxyRes.headers['content-disposition']);
        }
        if (proxyRes.headers['content-length']) {
            res.setHeader('Content-Length', proxyRes.headers['content-length']);
        }

        // Stream the response directly to the client
        proxyRes.pipe(res);
    }).on('error', (e) => {
        console.error('Download Proxy Error:', e);
        res.status(500).json({ error: 'Failed to fetch file from backend' });
    });
}
