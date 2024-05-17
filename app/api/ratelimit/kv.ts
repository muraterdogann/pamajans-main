import { Redis } from '@upstash/redis';

const {
  KV_REST_API_URL,
  KV_REST_API_TOKEN
} = process.env;

if (!KV_REST_API_URL || !KV_REST_API_TOKEN) {
  throw new Error('Missing required environment variables');
}

const redis = new Redis({
  url: KV_REST_API_URL,
  token: KV_REST_API_TOKEN,
});

export default redis;
