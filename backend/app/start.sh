echo "Starting application..."
node dist/src/main &

APP_PID=$!

echo "Waiting for application to start..."
sleep 15

echo "Running migrations..."
npm run typeorm:run-migrations

wait $APP_PID

kill $APP_PID
