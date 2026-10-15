const mastodon = { instance: "hachyderm.io", username: "morganjones" };
const twitterUsername = "morganj_cy";

export default {
  mastodon,
  twitterUsername,
  socials: {
    mastodon: `https://${mastodon.instance}/@${mastodon.username}`,
    bluesky: "https://bsky.app/profile/morganjon.es",
    twitter: `https://x.com/${twitterUsername}`,
    x: `https://x.com/${twitterUsername}`,
    github: "https://github.com/morganj-cy",
    discord: "https://discord.gg/ptdqM86UBa",
  },
};
