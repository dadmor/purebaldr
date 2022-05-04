import Redis from 'ioredis'

export const connectToRedis = () => {
    console.log(process.env.REDIS_URL);

    let redis = new Redis(process.env.REDIS_URL);

    return redis;
}