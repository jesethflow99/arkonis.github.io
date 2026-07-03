#!/bin/bash

set -e

echo "🔧 Matando servidor previo si existe..."
kill $(lsof -ti:5173) 2>/dev/null || true

echo "🔧 Iniciando servidor de desarrollo..."
npx vite --host 0.0.0.0 &
DEV_PID=$!

sleep 3

echo "🌐 Exponiendo con Cloudflare Tunnel..."
npx cloudflared tunnel --url http://localhost:5173

kill $DEV_PID 2>/dev/null
