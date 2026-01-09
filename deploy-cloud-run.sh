#!/bin/bash

# Deploy Innovation Hub to Cloud Run

# Set variables
PROJECT_ID="YOUR_PROJECT_ID"  # Replace with your GCP project ID
SERVICE_NAME="innovation-hub"
REGION="us-central1"

echo "🚀 Deploying Innovation Hub to Cloud Run..."

# Deploy to Cloud Run
gcloud run deploy $SERVICE_NAME \
  --source . \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --project $PROJECT_ID \
  --memory 512Mi \
  --cpu 1 \
  --port 8080 \
  --max-instances 10

echo "✅ Deployment complete!"
