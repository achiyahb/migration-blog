const dev = process.env.NODE_ENVIRONMENT !== 'production';

export const BLOG_URL = process.env.BLOG_URL;

export const SERVER = dev ? process.env.DEV_URL : BLOG_URL;

export const ProfilesUrls = {
    FACEBOOK: process.env.FACEBOOK_PROFILE_URL,
    LINKEDIN: process.env.LINKEDIN_PROFILE_URL,
    GITHUB: process.env.GITHUB_PROFILE_URL,
}

